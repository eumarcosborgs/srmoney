import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { User } from "@modules/users/infra/typeorm/entities/User";
import { Type } from "@modules/types/infra/typeorm/entities/Type";

@Entity('months')
export class Month {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column()
  type_id: string;

  @ManyToOne(() => Type, type => type.id)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  type: Type;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
