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
import { Favorite } from './Favorite';
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

  @Column({
    type: DataType.INTEGER,
    //todo:allowNull: false,
    allowNull: true,
  })
  current_cart_id!: number;

  @HasMany(() => Cart, 'user_id')
  cart!: Cart[];

  @HasMany(() => UserOrder, 'user_id')
  user_orders!: UserOrder[];

  @HasMany(() => Address, 'user_id')
  addresses!: Address[];
}
