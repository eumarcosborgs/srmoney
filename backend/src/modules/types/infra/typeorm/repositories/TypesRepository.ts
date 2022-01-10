import { getRepository, Repository } from "typeorm";

import { ITypesRepository } from "@modules/types/repositories/ITypesRepository";
import { Type } from "../entities/Type";


export class TypesRepository implements ITypesRepository {
  private ormRepository: Repository<Type>;

  constructor () {
    this.ormRepository = getRepository(Type);
  }

  public async findByName(user_id: string, name: string): Promise<Type | undefined> {
      return await this.ormRepository.findOne({
        where: {
          user_id,
          name,
        }
      })
  }

  public async findAll(user_id: string): Promise<Type[]> {
      return await this.ormRepository.find({
        where: {
          user_id,
        }
      })
  }
  
  public async create(user_id: string, name: string): Promise<Type> {
      const type = this.ormRepository.create({
        user_id, 
        name
      });

      return await this.ormRepository.save(type);
  }
}