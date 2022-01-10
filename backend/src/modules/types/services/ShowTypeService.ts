import { inject, injectable } from "tsyringe";

import { ITypesRepository } from "../repositories/ITypesRepository";

import { AppError } from "@shared/errors/AppError";

import { Type } from "../infra/typeorm/entities/Type";

@injectable()
export class ShowTypeService {
  constructor (
    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(user_id: string, name: string): Promise<Type> {
    const checkTypeExist = await this.typesRepository.findByName(user_id, name);

    if (!checkTypeExist) {
      throw new AppError('This type does not exist.');
    }

    return checkTypeExist;
  }
}