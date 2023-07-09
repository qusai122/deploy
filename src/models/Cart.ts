import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { CartItem } from './CartItem';
import { Product } from './Product';
import { User } from './User';

@Table({
  timestamps: true,
  tableName: 'carts',
})
export class Cart extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId!: number;
  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => CartItem)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cart_item_id!: number;
  @HasMany(() => CartItem)
  cart_items!: CartItem[];

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sub_total!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  discount!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  delivery_fee!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  grand_total!: number;
}
