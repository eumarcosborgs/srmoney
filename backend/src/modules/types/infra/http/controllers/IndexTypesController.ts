import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTypesService } from "@modules/types/services/ListTypesService";

export class IndexTypesController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const page = request.params.page;
    const quantity_per_page = request.params.quantity_per_page;

    const listTypes = container.resolve(ListTypesService);

    const types = await listTypes.execute(user_id, page, quantity_per_page);

    return response.json(types);
  }
}
