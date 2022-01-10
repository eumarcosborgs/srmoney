import { inject, injectable } from "tsyringe";

import { ICreateMonthDTO } from "../dtos/ICreateMonthDTO";
import { IMonthsRepository } from "../repositories/IMonthsRepository";
import { ITypesRepository } from "@modules/types/repositories/ITypesRepository";

import { AppError } from "@shared/errors/AppError";

import { Month } from "../infra/typeorm/entities/Month";

@injectable()
export class CreateMonthService {
  constructor (
    @inject('MonthsRepository')
    private monthsRepository: IMonthsRepository,

    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(data: ICreateMonthDTO): Promise<Month> {
    const checkTypeExist = await this.typesRepository.findByName(data.user_id, data.type_id);

    if (checkTypeExist) {
      throw new AppError('Type does not exist.');
    }

    const checkNameExist = await this.monthsRepository.findByName(data.user_id, data.type_id, data.name);

    if (checkNameExist) {
      throw new AppError('That name is already in use.');
    }

    return await this.monthsRepository.create(data);
  }
}