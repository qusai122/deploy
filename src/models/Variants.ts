import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Product } from './Product';
import { VariantOption } from './VariantOption';

@Table({
  timestamps: false,
  tableName: 'variants',
})
export class Color extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @HasMany(() => VariantOption, 'variant_option_id')
  variant_options!: VariantOption;

  @BelongsTo(() => Product, 'product_id')
  product!: Product;
}
