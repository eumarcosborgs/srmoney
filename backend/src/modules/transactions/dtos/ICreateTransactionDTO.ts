export interface ICreateTransactionDTO {
  user_id: string;
  title: string;
  type: string;
  category: string;
  amount: number;
  date: Date;
}