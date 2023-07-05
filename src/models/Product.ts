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
import { Color } from './Colors';
import { Favorite } from './Favourite';
import { ProductImage } from './ProductsImage';
import { Rating } from './Rating';

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
  description!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price!: number;

  @BelongsTo(() => Category, 'category_id')
  category!: Category;

  //todo

  @BelongsTo(() => Rating, 'rating_id')
  rating!: Rating;

  @BelongsTo(() => Brand, 'brand_id')
  brand!: Brand;

  @HasMany(() => Color, 'colors_id')
  colors!: Color[];

  @HasMany(() => ProductImage, 'images_id')
  images!: ProductImage[];
}
