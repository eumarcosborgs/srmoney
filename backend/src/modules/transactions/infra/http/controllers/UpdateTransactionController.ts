import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTransactionService } from "@modules/transactions/services/UpdateTransactionService";

export class UpdateTransactionController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const { type_name, month_name, id } = request.params;
    const body = request.body;
    const user_id = request.user.id;

    const updateTransaction = container.resolve(UpdateTransactionService);

    const transaction = await updateTransaction.execute(
      user_id,
      type_name,
      month_name,
      id,
      { ...body }
    );

    return response.json(transaction);
  }
}