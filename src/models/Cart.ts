import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { CartItem } from './CartItem';
import { User } from './User';
import { UserOrder } from './UserOrder';

@Table({
  timestamps: true,
  tableName: 'carts',
})
export class Cart extends Model {
  @BelongsTo(() => User, 'user_id')
  user!: User;

  @HasMany(() => CartItem, 'cart_id')
  cart_items!: CartItem[];

  @HasOne(() => UserOrder, 'cart_id')
  userOrder!: UserOrder[];

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    validate: {
      min: 0,
    },
  })
  sub_total!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
    defaultValue: 0,
    validate: {
      max: 100,
      min: 0,
    },
  })
  discount!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
    defaultValue: 12.5,
    validate: {
      max: 200,
      min: 0,
    },
  })
  delivery_fee!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_ordered!: boolean;
}
