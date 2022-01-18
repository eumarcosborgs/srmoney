import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowTransactionService } from "@modules/transactions/services/ShowTransactionService";

export class ShowTransactionController {
  public async execute(request: Request, response: Response): Promise<Response> {
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