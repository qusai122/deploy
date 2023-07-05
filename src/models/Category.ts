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
  tableName: 'categories',
})
export class Category extends Model {
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

  @HasMany(() => Product, 'product_id')
  products!: Product[];
}
