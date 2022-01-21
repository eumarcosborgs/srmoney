import { inject, injectable } from "tsyringe";

import { ITransactionsRepository } from "../repositories/ITransactionsRepository";
import { IMonthsRepository } from "@modules/months/repositories/IMonthsRepository";
import { ITypesRepository } from "@modules/types/repositories/ITypesRepository";

import { AppError } from "@shared/errors/AppError";

import { Transaction } from "../infra/typeorm/entities/Transaction";


@injectable()
export class ListTransactionsService {
  constructor (
    @inject('TransactionsRepository')
    private transationsRepository: ITransactionsRepository,

    @inject('MonthsRepository')
    private monthsRepository: IMonthsRepository,

    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(user_id: string, type_name: string, month_name: string): Promise<Transaction[]> {
    const checkTypeExist = await this.typesRepository.findByName(user_id, type_name);

    if (!checkTypeExist) {
      throw new AppError('Type does not exist.');
    }

    const checkMonthExist = await this.monthsRepository.findByName(user_id, checkTypeExist.id, month_name);

    if (!checkMonthExist) {
      throw new AppError('Month does not exist.');
    }

    return await this.transationsRepository.findAllByMonth(user_id, checkTypeExist.id, checkMonthExist.id);
  }
}