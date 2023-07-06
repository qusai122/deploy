import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { Cart } from './Cart';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'cart_item',
})
export class CartItem extends Model {
  @HasOne(() => Product, 'id')
  product!: Product;
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  quantity!: number;
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price!: number;

  @BelongsTo(() => Cart, 'cart_id')
  cart_id!: Cart;
}
