import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { User } from "@modules/users/infra/typeorm/entities/User";
import { Type } from "@modules/types/infra/typeorm/entities/Type";
import { Month } from "@modules/months/infra/typeorm/entities/Month";

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
  
  @Column()
  type_transaction: string;
  
  @Column()
  category: string;
  
  @Column()
  amount: number;

  @Column()
  date: Date;
  
  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column()
  type_id: number;

  @ManyToOne(() => Type, type => type.id)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  type: Type;

  @Column()
  month_id: string;

  @ManyToOne(() => Month, month => month.id)
  @JoinColumn({ name: 'month_id', referencedColumnName: 'id' })
  month: Month;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}