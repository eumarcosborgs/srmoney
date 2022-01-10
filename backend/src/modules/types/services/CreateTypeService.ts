import { inject, injectable } from "tsyringe";

import { ITypesRepository } from "../repositories/ITypesRepository";

import { Type } from "../infra/typeorm/entities/Type";
import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateTypeService {
  constructor (
    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(user_id: string, name: string): Promise<Type> {
    const checkTypeExist = await this.typesRepository.findByName(user_id, name);

    if (checkTypeExist) {
      throw new AppError('That name is already in use.');
    }

    return await this.typesRepository.create(user_id, name);
  }
}