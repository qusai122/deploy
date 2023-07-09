import {
  HasOne,
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Cart } from './Cart';
import { User } from './User';

@Table({
  timestamps: true,
  tableName: 'user_orders',
})
export class UserOrder extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Must be a valid email address',
      },
    },
  })
  email!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;
  @BelongsTo(() => User, 'user_id')
  user!: User;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cart_id!: number;
  @HasOne(() => Cart)
  cart!: Cart;
}
