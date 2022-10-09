import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Tag from './Tag';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name!: string;
  @OneToMany(() => Tag, (tag) => tag.product)
  tags!: Tag[];
}
