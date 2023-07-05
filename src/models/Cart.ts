import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Product } from './Product';
import { User } from './User';

@Table({
  timestamps: false,
  tableName: 'carts',
})
export class Cart extends Model {
  @BelongsTo(() => User, 'user_id')
  product!: User;

  @HasMany(() => Product, 'products')
  products!: Product[];

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  sub_total!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    defaultValue: 0,
  })
  discount!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    defaultValue: 0,
  })
  delivery_fee!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  grand_total!: number;
}
