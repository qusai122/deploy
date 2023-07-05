import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'product_images',
})
export class ProductImage extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  src!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  alt!: string;

  @BelongsTo(() => Product, 'product_id')
  product!: Product;
}
