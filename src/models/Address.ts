import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { User } from './User';

@Table({
  timestamps: false,
  tableName: 'addresses',
})
export class Address extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [9, 12],
    },
  })
  mobile_number!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 100],
    },
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 100],
    },
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pin_code!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_default!: boolean;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User, 'user_id')
  user!: User;

}
