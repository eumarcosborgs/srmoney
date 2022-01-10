import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
import { Transaction } from "../infra/typeorm/entities/Transaction";

interface IRequest {
  data: ICreateTransactionDTO;
  type_id: string;
  month_id: string;
}

export interface ITransactionsRepository {
  create(data: IRequest): Promise<Transaction>;
  findByMonth(
    user_id: string,
    type_id: string,
    month_id: string,
  ): Promise<Transaction[]>;
} 