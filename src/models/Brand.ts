import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'brands',
})
export class Brand extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  img!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
    unique: true,
  })
  product_id!: string;
  @HasMany(() => Product)
  products!: Product[];
}
