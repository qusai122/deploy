import { HasOne, Model, Table, Column, DataType } from 'sequelize-typescript';
import { Cart } from './Cart';

@Table({
  timestamps: true,
  tableName: 'user_orders',
})
export class UserOrder extends Model {
  @HasOne(() => Cart, 'id')
  cart_id!: Cart;

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
}
