import { Table, Model, BelongsTo, HasMany } from 'sequelize-typescript';
import { Product } from './Product';
import { User } from './User';

@Table({
  timestamps: false,
  tableName: 'favorites',
})
export class FavoriteList extends Model {
  @BelongsTo(() => User, 'user_id')
  user!: User;
  @HasMany(() => Product, 'products')
  products!: Product[];
}
