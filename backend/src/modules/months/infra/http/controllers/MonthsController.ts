import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateMonthService } from "@modules/months/services/CreateMonthService";
import { ListMonthsService } from "@modules/months/services/ListMonthsService";

export class MonthsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { type_name } = request.params;
    const { id: user_id } = request.user;

    const createMonth = container.resolve(CreateMonthService);

    const month = await createMonth.execute({
      user_id,
      name,
      type_name
    });

    return response.json(month);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { type_name } = request.params;
    const { id: user_id } = request.user; 

    const listMonths = container.resolve(ListMonthsService);

    const months = await listMonths.execute(
      user_id,
      type_name
    );

    return response.json(months);
  }
}
