import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTransactionService } from "@modules/transactions/services/DeleteTransactionService";

export class DeleteTransactionController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const { type_name, month_name, id } = request.params;
    const user_id = request.user.id;

    const deleteTransaction = container.resolve(DeleteTransactionService);

    await deleteTransaction.execute(
      user_id,
      type_name,
      month_name,
      id,
    );

    return response.status(204).json();
  }
}