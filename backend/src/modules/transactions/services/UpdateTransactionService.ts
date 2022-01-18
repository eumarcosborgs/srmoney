import { inject, injectable } from "tsyringe";

import { IMonthsRepository } from "@modules/months/repositories/IMonthsRepository";
import { ITypesRepository } from "@modules/types/repositories/ITypesRepository";
import { ITransactionsRepository } from "../repositories/ITransactionsRepository";

import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";

import { AppError } from "@shared/errors/AppError";

import { Transaction } from "../infra/typeorm/entities/Transaction";


@injectable()
export class UpdateTransactionService {
  constructor (
    @inject('TransationsRepository')
    private transationsRepository: ITransactionsRepository,

    @inject('MonthsRepository')
    private monthsRepository: IMonthsRepository,

    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(user_id: string, type_name: string, month_name: string, id: string, data: Omit<ICreateTransactionDTO, 'user_id'>): Promise<Transaction> {
    const checkTypeExist = await this.typesRepository.findByName(user_id, type_name);

    if (!checkTypeExist) {
      throw new AppError('Type does not exist.');
    }

    const checkMonthExist = await this.monthsRepository.findByName(user_id, checkTypeExist.id, month_name);

    if (!checkMonthExist) {
      throw new AppError('Month does not exist.');
    }

    const checkTransactionExist = await this.transationsRepository.findByName(user_id, checkTypeExist.id, checkMonthExist.id, parseInt(id));
  
    if (!checkTransactionExist) {
      throw new AppError('This transaction does not exist.');
    }

    Object.assign(checkTransactionExist, {
      ...data
    });

    return await this.transationsRepository.save(checkTransactionExist);
  }
}