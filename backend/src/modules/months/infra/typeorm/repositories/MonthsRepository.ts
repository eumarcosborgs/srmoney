import { getRepository, Repository } from "typeorm";

import { IMonthsRepository } from "@modules/months/repositories/IMonthsRepository";

import { Month } from "../entities/Month";
import { ICreateMonthDTO } from "@modules/months/dtos/ICreateMonthDTO";

export class MonthsRepository implements IMonthsRepository {
  private ormRepository: Repository<Month>;

  constructor () {
    this.ormRepository = getRepository(Month);
  }

  public async create(data: ICreateMonthDTO): Promise<Month> {
      const month = this.ormRepository.create(data);

      return await this.ormRepository.save(month);
  }

  public async findAll(user_id: string, type_id: string): Promise<Month[]> {
      return await this.ormRepository.find({
        where: {
          user_id,
          type_id
        }
      });
  }

  public async findByName(user_id: string, type_id: string, name: string): Promise<Month | undefined> {
      return await this.ormRepository.findOne({
        where: {
          user_id,
          type_id,
          name
        }
      });
  }
}