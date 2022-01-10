import { inject, injectable } from "tsyringe";

import { ICreateMonthDTO } from "../dtos/ICreateMonthDTO";
import { IMonthsRepository } from "../repositories/IMonthsRepository";
import { ITypesRepository } from "@modules/types/repositories/ITypesRepository";

import { AppError } from "@shared/errors/AppError";

import { Month } from "../infra/typeorm/entities/Month";

interface IRequest {
  data: ICreateMonthDTO;
  type_name: string;
}

@injectable()
export class CreateMonthService {
  constructor (
    @inject('MonthsRepository')
    private monthsRepository: IMonthsRepository,

    @inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(data: IRequest): Promise<Month> {
    console.log(data);

    const checkTypeExist = await this.typesRepository.findByName(data.data.user_id, data.type_name);

    if (!checkTypeExist) {
      throw new AppError('Type does not exist.');
    }

    console.log(checkTypeExist);

    const checkNameExist = await this.monthsRepository.findByName(data.data.user_id, checkTypeExist.id, data.data.name);

    if (checkNameExist) {
      throw new AppError('That name is already in use.');
    }

    console.log(checkNameExist);

    return await this.monthsRepository.create({
      data: {
        name: data.data.name, 
        user_id: data.data.user_id,
      },
      type_id: checkTypeExist.id
    });
  }
}