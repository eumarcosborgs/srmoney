import { ICreateMonthDTO } from "../dtos/ICreateMonthDTO";
import { Month } from "../infra/typeorm/entities/Month";

export interface IMonthsRepository {
  create(data: ICreateMonthDTO): Promise<Month>;
  findAll(user_id: string, type_name: string): Promise<Month[]>;
  findByName(user_id: string, type_name: string, name: string): Promise<Month | undefined>;
}