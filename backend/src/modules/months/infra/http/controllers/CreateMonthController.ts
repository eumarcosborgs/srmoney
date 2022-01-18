import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateMonthService } from "@modules/months/services/CreateMonthService";

export class CreateMonthController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const body = request.body;
    const { type_name } = request.params;
    const { id: user_id } = request.user;

    const createMonth = container.resolve(CreateMonthService);

    const month = await createMonth.execute({
      data: {
        user_id,
        ...body,
      },
      type_name,
    });

    return response.json(month);
  }
}
