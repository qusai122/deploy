import { Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'user_orders',
})
export class UserOrder extends Model {}
