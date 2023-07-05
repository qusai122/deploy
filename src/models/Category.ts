import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo,
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

  //instead of creating sub category
  @BelongsTo(() => Category, 'parent_category_id')
  user!: Category;

  @HasMany(() => Product, 'product_id')
  products!: Product[];
}
