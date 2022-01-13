import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTypeService } from "@modules/types/services/CreateTypeService";
import { ListTypesService } from "@modules/types/services/ListTypesService";
import { ShowTypeService } from "@modules/types/services/ShowTypeService";

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
    const page = request.params.page;
    const quantity_per_page = request.params.quantity_per_page;

    const listTypes = container.resolve(ListTypesService);

    const types = await listTypes.execute(user_id, page, quantity_per_page);

    return response.json(types);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { type_name } = request.params;

    const showType = container.resolve(ShowTypeService);

    const type = await showType.execute(user_id, type_name);

    return response.json(type);
  }
}
