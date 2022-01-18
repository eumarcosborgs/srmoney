import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTransactionService } from "@modules/transactions/services/CreateTransactionService";

export class CreateTransactionController {
  public async execute(request: Request, response: Response): Promise<Response> {
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
}