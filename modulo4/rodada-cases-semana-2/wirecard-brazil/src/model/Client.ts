import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Payment from './Payment';

@Entity()
export default class Client {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name!: string;
  @Column({unique: true})
  email!: string;
  @Column({unique: true})
  cpf!: string;

  @OneToMany(() => Payment, (payment) => payment.client)
  payment!: Array<Payment>;
}
