import { HasOne } from 'sequelize';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Brand } from './Brand';
import { Category } from './Category';
import { Color } from './Colors';
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

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image1!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image2!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image3!: string;
}
