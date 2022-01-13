import { inject, injectable } from "tsyringe";

import { ITypesRepository } from "../repositories/ITypesRepository";

import { Type } from "../infra/typeorm/entities/Type";

@injectable()
export class ListTypesService {
  constructor (
    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(user_id: string, page: string, quantityPerPage: string): Promise<object[]> {
    return await this.typesRepository.findAll(user_id, parseInt(page), parseInt(quantityPerPage));
  }
}