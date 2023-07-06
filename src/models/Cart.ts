import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CartItem } from './CartItem';
import { Product } from './Product';
import { User } from './User';

@Table({
  timestamps: true,
  tableName: 'carts',
})
export class Cart extends Model {
  @BelongsTo(() => User, 'user_id')
  user!: User;

  @HasMany(() => CartItem, 'cart_items')
  cart_items!: CartItem[];

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  sub_total!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    defaultValue: 0,
  })
  discount!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    defaultValue: 0,
  })
  delivery_fee!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  grand_total!: number;
}
