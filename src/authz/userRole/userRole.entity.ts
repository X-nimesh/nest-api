import { Userentity } from 'src/user/models/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_roles' })
export class UserRoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => Userentity, (user) => user.userRole)
  @JoinColumn({ name: 'user_id' })
  user: Userentity;

  @Column({ name: 'role_id' })
  roleId: number;
  @ManyToOne(() => Userentity, (user) => user.userRole)
  @JoinColumn({ name: 'role_id' })
  role: Userentity;
}
