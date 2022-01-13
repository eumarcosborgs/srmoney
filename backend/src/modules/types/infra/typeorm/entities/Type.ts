import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Exclude } from "class-transformer";

import { User } from "@modules/users/infra/typeorm/entities/User";
import { Month } from "@modules/months/infra/typeorm/entities/Month";
import { Transaction } from "@modules/transactions/infra/typeorm/entities/Transaction";

@Entity('types')
export class Type{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
  
  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @OneToMany(() => Month, ({ type }) => type, {
    cascade: ['insert'],
    eager: true,
  })
  months: Month[];

  @Exclude()
  @OneToMany(() => Transaction, ({ type }) => type, {
    cascade: ['insert'],
    eager: true,
  })
  transactions: Transaction[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}