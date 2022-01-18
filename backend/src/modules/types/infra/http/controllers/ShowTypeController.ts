import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowTypeService } from "@modules/types/services/ShowTypeService";

export class ShowTypeController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { type_name } = request.params;

    const showType = container.resolve(ShowTypeService);

    const type = await showType.execute(user_id, type_name);

    return response.json(type);
  }
}
