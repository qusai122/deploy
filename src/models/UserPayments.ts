import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './User';

@Table({
  timestamps: false,
  tableName: 'user_payments',
})
export class UserPayment extends Model {
  @BelongsTo(() => User, 'user_id')
  user!: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  payment_type!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expiry!: Date;
}
