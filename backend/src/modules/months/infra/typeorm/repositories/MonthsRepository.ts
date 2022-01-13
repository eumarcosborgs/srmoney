import { getRepository, ILike, Repository } from "typeorm";

import { IMonthsRepository } from "@modules/months/repositories/IMonthsRepository";

import { Month } from "../entities/Month";
import { ICreateMonthDTO } from "@modules/months/dtos/ICreateMonthDTO";

interface IRequest {
  data: ICreateMonthDTO;
  type_id: number;
}

export class MonthsRepository implements IMonthsRepository {
  private ormRepository: Repository<Month>;

  constructor () {
    this.ormRepository = getRepository(Month);
  }

  public async create(data: IRequest): Promise<Month> {
      const month = this.ormRepository.create({
        name: data.data.name,
        user_id: data.data.user_id,
        type_id: data.type_id
      });

      return await this.ormRepository.save(month);
  }

  public async findAll(user_id: string, type_id: number, page: number, quantityPerPage: number): Promise<Month[]> {
      return await this.ormRepository.find({
        where: {
          user_id,
          type_id
        },
        skip: ((quantityPerPage * page) - quantityPerPage),
        take: quantityPerPage,
        loadRelationIds: {
          disableMixedMap: false,
        }
      });
  }

  public async findByName(user_id: string, type_id: number, name: string): Promise<Month | undefined> {
      return await this.ormRepository.findOne({
        where: {
          name: ILike(`%${name}%`),
          user_id,
          type_id,
        }
      });
  }
}