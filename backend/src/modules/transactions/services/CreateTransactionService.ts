import { inject, injectable } from "tsyringe";

import { IMonthsRepository } from "@modules/months/repositories/IMonthsRepository";
import { ITypesRepository } from "@modules/types/repositories/ITypesRepository";

import { ITransactionsRepository } from "../repositories/ITransactionsRepository";
import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";

import { AppError } from "@shared/errors/AppError";

import { Transaction } from "../infra/typeorm/entities/Transaction";

interface IRequest {
  data: ICreateTransactionDTO;
  type_name: string;
  month_name: string;
}

@injectable()
export class CreateTransactionService {
  constructor (
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,

    @inject('MonthsRepository')
    private monthsRepository: IMonthsRepository,

    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(data: IRequest): Promise<Transaction> {
    const checkTypeExist = await this.typesRepository.findByName(data.data.user_id, data.type_name);

    if (!checkTypeExist) {
      throw new AppError('Type does not exist.');
    }

    const checkMonthExist = await this.monthsRepository.findByName(data.data.user_id, checkTypeExist.id, data.month_name);

    if (!checkMonthExist) {
      throw new AppError('Month does not exist.');
    }

    return await this.transactionsRepository.create({
      data: data.data,
      type_id: checkTypeExist.id,
      month_id: checkMonthExist.id
    });
  }
}