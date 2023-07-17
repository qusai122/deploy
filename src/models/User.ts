import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Address } from './Address';
import { Cart } from './Cart';
import { UserOrder } from './UserOrder';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      min: 8,
      isAlphanumeric: true,
    },
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
    allowNull: false,
  })
  current_cart_id!: number;

  @HasMany(() => Cart, 'user_id')
  cart!: Cart[];

  @HasMany(() => UserOrder, 'user_id')
  user_orders!: UserOrder[];

  @HasMany(() => Address, 'user_id')
  addresses!: Address[];
}
