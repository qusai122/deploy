import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
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
    defaultValue: 'ordered',
  })
  status!: string;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User, 'user_id')
  user!: User;


  @ForeignKey(() => Cart)
  @Column({
    field: 'cart_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  cartId!: number;

  @BelongsTo(() => Cart, 'cart_id')
  cart!: User;
}
