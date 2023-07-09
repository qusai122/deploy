import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';
import { Cart } from './Cart';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'cart_item',
})
export class CartItem extends Model {
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id!: number;
  @HasOne(() => Product, 'product_id')
  product!: Product;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price!: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cart_id!: number;
  @BelongsTo(() => Cart, 'cart_id')
  cart!: Cart;
}
