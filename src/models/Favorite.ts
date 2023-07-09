import {
  Table,
  Model,
  BelongsTo,
  HasMany,
  DataType,
  Column,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './Product';
import { User } from './User';

@Table({
  timestamps: false,
  tableName: 'favorites',
})
export class Favorite extends Model {
  @BelongsTo(() => User, 'user_id')
  user!: User;

  @BelongsTo(() => Product, 'product_id')
  products!: Product[];
}
