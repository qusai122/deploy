import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
