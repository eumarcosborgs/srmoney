import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { User } from "@modules/users/infra/typeorm/entities/User";
import { Month } from "@modules/months/infra/typeorm/entities/Month";

@Entity('types')
export class Type{
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}