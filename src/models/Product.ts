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
import { Variant } from './Variants';

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
    type: DataType.NUMBER,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  rating!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  discount!: number;

  @BelongsTo(() => Category, 'category_id')
  category!: Category;

  @BelongsTo(() => Brand, 'brand_id')
  brand!: Brand;

  @HasMany(() => Variant, 'colors_id')
  colors!: Variant[];

  @HasMany(() => ProductImage, 'images_id')
  images!: ProductImage[];
}
