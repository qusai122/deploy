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

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  category_id!: number;
  @BelongsTo(() => Category)
  category!: Category;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  rating_id!: Rating;
  @BelongsTo(() => Rating)
  rating!: Rating;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  brand_id!: Brand;
  @BelongsTo(() => Brand)
  brand!: Brand;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  colors_id!: string;
  @HasMany(() => Color)
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
