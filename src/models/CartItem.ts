import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
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
    validate: {
      max: 100,
      min: 1,
    },
  })
  quantity!: number;
}
