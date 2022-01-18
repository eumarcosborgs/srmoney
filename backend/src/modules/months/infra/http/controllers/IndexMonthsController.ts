import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListMonthsService } from "@modules/months/services/ListMonthsService";

export class IndexMonthsController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const { type_name, page, quantity_per_page } = request.params;
    const { id: user_id } = request.user; 

    const listMonths = container.resolve(ListMonthsService);

    const months = await listMonths.execute(
      user_id,
      type_name,
      page,
      quantity_per_page
    );

    return response.json(months);
  }
}
