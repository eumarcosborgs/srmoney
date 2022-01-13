import { ICreateMonthDTO } from "../dtos/ICreateMonthDTO";
import { Month } from "../infra/typeorm/entities/Month";

interface IRequest {
  data: ICreateMonthDTO;
  type_id: number;
}
export interface IMonthsRepository {
  create(data: IRequest): Promise<Month>;
  findAll(user_id: string, type_id: number, page: number, quantityPerPage: number): Promise<Month[]>;
  findByName(user_id: string, type_id: number, name: string): Promise<Month | undefined>;
}