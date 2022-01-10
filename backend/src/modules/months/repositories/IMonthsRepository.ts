import { ICreateMonthDTO } from "../dtos/ICreateMonthDTO";
import { Month } from "../infra/typeorm/entities/Month";

interface IRequest {
  data: ICreateMonthDTO;
  type_id: string;
}
export interface IMonthsRepository {
  create(data: IRequest): Promise<Month>;
  findAll(user_id: string, type_id: string): Promise<Month[]>;
  findByName(user_id: string, type_id: string, name: string): Promise<Month | undefined>;
}