import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { Address } from './Address';
import { Cart } from './Cart';
import { FavoriteList } from './FavoriteList';
import { UserOrder } from './UserOrder';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Must be a valid email address',
      },
    },
  })
  email!: string;

  //todo make sure if it works and check the other names
  @HasOne(() => Cart)
  cart!: Cart;

  @HasMany(() => UserOrder, 'user_order')
  user_orders!: UserOrder;

  @HasMany(() => Address, 'addresses')
  addresses!: Address;

  @HasOne(() => FavoriteList, 'favorite_list')
  favorite_list!: Cart;
}
