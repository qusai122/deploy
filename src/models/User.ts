import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasOne,
  HasMany,
  ForeignKey,
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
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  product_id!: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cart_id!: number;
  @HasOne(() => Cart)
  cart!: Cart;

  @ForeignKey(() => UserOrder)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  user_order!: number;
  @HasMany(() => UserOrder)
  user_orders!: UserOrder[];

  @ForeignKey(() => UserOrder)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  address_id!: number;

  @HasMany(() => Address, 'address_id')
  addresses!: Address[];

  @ForeignKey(() => UserOrder)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  favorite_list_id!: number;

  @HasOne(() => FavoriteList, 'favorite_list_id')
  favorite_list!: FavoriteList;
}
