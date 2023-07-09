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
import { CartItem } from './CartItem';
import { Category } from './Category';
import { Favorite } from './Favorite';
import { ProductImage } from './ProductsImage';
import { ProductVariant } from './ProductVariant';

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

  @BelongsTo(() => Category, 'category_id')
  category!: Category;

  @BelongsTo(() => Brand, 'brand_id')
  brand!: Brand;

  @HasMany(() => ProductImage, 'product_id')
  productImage!: ProductImage[];

  @HasMany(() => Favorite, 'product_id')
  favorites!: Favorite[];

  @HasMany(() => CartItem, 'product_id')
  cartItem!: CartItem[];

  @HasMany(() => ProductVariant, 'product_id')
  productVariants!: ProductVariant[];
}
