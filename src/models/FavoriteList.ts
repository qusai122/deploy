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
export class FavoriteList extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @BelongsTo(() => User, 'user_id')
  user!: User;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id!: number;
  @HasMany(() => Product)
  products!: Product[];
}
