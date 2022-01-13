import { inject, injectable } from "tsyringe";

import { IMonthsRepository } from "../repositories/IMonthsRepository";

import { Month } from "../infra/typeorm/entities/Month";

@injectable()
export class ListMonthsService {
  constructor (
    @inject('MonthsRepository')
    private monthsRepository: IMonthsRepository,
  ) {}

  public async execute(user_id: string, type_id: string, page: string, quantityPerPage: string): Promise<Month[]> {
    return await this.monthsRepository.findAll(user_id, parseInt(type_id), parseInt(page), parseInt(quantityPerPage));
  }
}