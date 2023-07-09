import { HasOne } from 'sequelize';
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
import { Brand } from './Brand';
import { Category } from './Category';
import { ProductImage } from './ProductsImage';

@Table({
  timestamps: true,
  tableName: 'products',
})
export class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tittle!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
  })
  rating!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  discount!: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  category_id!: number;

  @BelongsTo(() => Category, 'category_id')
  category!: Category;

  @ForeignKey(() => Brand)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  brand_id!: number;

  @BelongsTo(() => Brand, 'brand_id')
  brand!: Brand;

  @ForeignKey(() => ProductImage)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  images_id!: string;

  @HasMany(() => ProductImage)
  productImage!: ProductImage[];
}
