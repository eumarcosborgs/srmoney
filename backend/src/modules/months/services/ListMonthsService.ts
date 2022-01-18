import { inject, injectable } from "tsyringe";

import { IMonthsRepository } from "../repositories/IMonthsRepository";
import { ITypesRepository } from "@modules/types/repositories/ITypesRepository";

import { AppError } from "@shared/errors/AppError";

import { Month } from "../infra/typeorm/entities/Month";

@injectable()
export class ListMonthsService {
  constructor (
    @inject('MonthsRepository')
    private monthsRepository: IMonthsRepository,

    @inject('TypesRepository')
    private typesRepository: ITypesRepository
  ) {}

  public async execute(user_id: string, type_name: string, page: string, quantityPerPage: string): Promise<Month[]> {
    const checkTypeExist = await this.typesRepository.findByName(user_id, type_name);

    if (!checkTypeExist) {
      throw new AppError('Type does not exist.');
    } 

    return await this.monthsRepository.findAll(user_id, checkTypeExist.id, parseInt(page), parseInt(quantityPerPage));
  }
}