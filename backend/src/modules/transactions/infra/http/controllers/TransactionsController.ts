import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTransactionService } from "@modules/transactions/services/CreateTransactionService";
import { ListTransactionsService } from "@modules/transactions/services/ListTransactionsService";
import { ShowTransactionService } from "@modules/transactions/services/ShowTransactionService";

export class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { type_name, month_name } = request.params;
    const user_id = request.user.id;
    const body = request.body;
    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({
      data: {
        user_id,
        ...body
      },
      type_name,
      month_name,
    });

    return response.json(transaction);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { type_name, month_name } = request.params;
    const user_id = request.user.id;

    const listTransactions = container.resolve(ListTransactionsService);

    const transactions = await listTransactions.execute(
      user_id,
      type_name,
      month_name,
    );

    return response.json(transactions);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { type_name, month_name, id } = request.params;
    const user_id = request.user.id;

    const showTransaction = container.resolve(ShowTransactionService);

    const transaction = await showTransaction.execute(
      user_id,
      type_name,
      month_name,
      id
    );

    return response.json(transaction);
  }
}