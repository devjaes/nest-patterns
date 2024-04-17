import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({
    name: 'code',
    type: 'varchar',
    length: 10,
  })
  code: string

  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
  })
  name: string

  @Column({
    name: 'brand',
    type: 'varchar',
    length: 50,
  })
  brand: string

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number

  @Column({
    name: 'stock',
    type: 'int',
  })
  stock: number

  @Column({
    name: 'unit_measure',
    type: 'varchar',
    length: 10,
  })
  unitMeasure: string

  @CreateDateColumn({
    name: 'register_date',
    type: 'timestamp',
  })
  registerDate: Date
}
