import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Variant } from './Variants';

@Table({
  timestamps: false,
  tableName: 'variant_options',
})
export class VariantOption extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  value!: string;

  @BelongsTo(() => Variant, 'variant_id')
  product!: Variant;
}
