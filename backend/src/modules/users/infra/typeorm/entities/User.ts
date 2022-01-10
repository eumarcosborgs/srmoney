import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Exclude } from 'class-transformer';

import { Type } from '@modules/types/infra/typeorm/entities/Type';
import { Month } from '@modules/months/infra/typeorm/entities/Month';
import { Transaction } from '@modules/transactions/infra/typeorm/entities/Transaction';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Type, ({ user }) => user, {
    cascade: ['insert'],
    eager: true,
  })
  types: Type[];

  @OneToMany(() => Month, ({ user }) => user, {
    cascade: ['insert'],
    eager: true,
  })
  months: Month[];

  @OneToMany(() => Transaction, ({ user }) => user, {
    cascade: ['insert'],
    eager: true,
  })
  transactions: Transaction[];
}