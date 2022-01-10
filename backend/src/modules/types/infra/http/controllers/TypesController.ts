import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTypeService } from "@modules/types/services/CreateTypeService";
import { ListTypesService } from "@modules/types/services/ListTypesService";

export class TypesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const user_id = request.user.id;

    const createType = container.resolve(CreateTypeService);

    const type = await createType.execute(
      user_id,
      name
    );

    return response.json(type);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listTypes = container.resolve(ListTypesService);

    const types = await listTypes.execute(user_id);

    return response.json(types);
  }
}
