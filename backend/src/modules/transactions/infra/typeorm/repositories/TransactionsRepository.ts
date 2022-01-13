import { getRepository, Repository } from "typeorm";

import { ICreateTransactionDTO } from "@modules/transactions/dtos/ICreateTransactionDTO";
import { ITransactionsRepository } from "@modules/transactions/repositories/ITransactionsRepository";

import { Transaction } from "../entities/Transaction";

interface IRequest {
  data: ICreateTransactionDTO;
  type_id: number;
  month_id: string;
}

export class TransactionsRepository implements ITransactionsRepository { 
  private ormRepository: Repository<Transaction>;
  
  constructor () {
    this.ormRepository = getRepository(Transaction)
  }

  public async create(data: IRequest): Promise<Transaction> {
      const transaction = this.ormRepository.create({
        user_id: data.data.user_id,
        type_id: data.type_id,
        month_id: data.month_id,
        title: data.data.title,
        category: data.data.category,
        type_transaction: data.data.type,
        amount: data.data.amount,
        date: data.data.date,
      });

      return await this.ormRepository.save(transaction);
  }

  public async findAllByMonth(user_id: string, type_id: number, month_id: string): Promise<Transaction[]> {
      return await this.ormRepository.find({
        where: {
          user_id,
          type_id,
          month_id
        },
        loadRelationIds: {
          disableMixedMap: false,
        }
      });
  }
}