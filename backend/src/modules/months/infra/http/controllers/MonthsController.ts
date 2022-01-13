import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateMonthService } from "@modules/months/services/CreateMonthService";
import { ListMonthsService } from "@modules/months/services/ListMonthsService";

export class MonthsController {
  public async create(request: Request, response: Response): Promise<Response> {
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

  public async index(request: Request, response: Response): Promise<Response> {
    const { type_id, page, quantity_per_page } = request.params;
    const { id: user_id } = request.user; 

    const listMonths = container.resolve(ListMonthsService);

    const months = await listMonths.execute(
      user_id,
      type_id,
      page,
      quantity_per_page
    );

    return response.json(months);
  }
}
