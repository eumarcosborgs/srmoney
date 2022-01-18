import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTypeService } from "@modules/types/services/CreateTypeService";

export class CreateTypeController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const user_id = request.user.id;

    const createType = container.resolve(CreateTypeService);

    const type = await createType.execute(
      user_id,
      name
    );

    return response.json(type);
  }
}
