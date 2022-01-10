import { Type } from "@modules/types/infra/typeorm/entities/Type";

export interface ITypesRepository {
  findByName(user_id: string, name: string): Promise<Type | undefined>;
  findAll(user_id: string): Promise<Type[]>;
  create(user_id: string, name: string): Promise<Type>;
}