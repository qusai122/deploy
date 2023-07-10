import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasOne,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Cart } from './Cart';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'cart_items',
})
export class CartItem extends Model {
  @BelongsTo(() => Cart, 'cart_id')
  cart!: Cart;

  @BelongsTo(() => Product, 'product_id')
  product!: Product;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;
}
