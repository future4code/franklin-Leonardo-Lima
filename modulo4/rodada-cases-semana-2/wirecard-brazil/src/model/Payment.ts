import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Client from './Client';

enum PaymentType {
  'CARD',
  'BOLETO',
}

@Entity()
export default class Payment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  amount!: number;
  @Column()
  type!: PaymentType;

  @ManyToOne(() => Client, (client) => client.payment, {nullable: false})
  client!: Array<Client>;
}
