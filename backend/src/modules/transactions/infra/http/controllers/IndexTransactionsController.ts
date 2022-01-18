import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTransactionsService } from "@modules/transactions/services/ListTransactionsService";

export class IndexTransactionsController {
  public async execute(request: Request, response: Response): Promise<Response> {
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
}