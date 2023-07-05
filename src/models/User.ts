import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { Address } from './Address';
import { Cart } from './Cart';
import { FavoriteList } from './FavoriteList';
import { Rating } from './Rating';
import { UserOrder } from './UserOrder';
import { UserPayment } from './UserPayments';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @HasOne(() => Cart, 'cart_id')
  cart!: Cart;

  @HasMany(() => UserOrder, 'user_order')
  user_orders!: UserOrder;

  @HasMany(() => Rating, 'ratings')
  ratings!: Rating;

  @HasMany(() => Address, 'addresses')
  addresses!: Address;

  @HasOne(() => FavoriteList, 'favorite_list')
  favorite_list!: Cart;

  @HasMany(() => UserPayment, 'user_payments')
  user_payments!: UserPayment;
}
