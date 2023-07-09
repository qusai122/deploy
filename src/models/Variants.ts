import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './Product';
import { VariantOption } from './VariantOption';

@Table({
  timestamps: false,
  tableName: 'variants',
})
export class Variant extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @ForeignKey(() => VariantOption)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  variant_option_id!: number;

  @HasMany(() => VariantOption)
  variant_options!: VariantOption;
}
