import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Product from './Product';

@Entity('tags')
export default class Tag {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name!: string;
  @ManyToOne(() => Product, (product) => product.tags)
  product?: Product;
}
