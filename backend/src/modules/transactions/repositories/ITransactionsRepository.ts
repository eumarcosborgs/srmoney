import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
import { Transaction } from "../infra/typeorm/entities/Transaction";

interface IRequest {
  data: ICreateTransactionDTO;
  type_id: number;
  month_id: number;
}

export interface ITransactionsRepository {
  create(data: IRequest): Promise<Transaction>;
  findAllByMonth(
    user_id: string,
    type_id: number,
    month_id: number,
  ): Promise<Transaction[]>;
} 