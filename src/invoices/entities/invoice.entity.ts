import { Customer } from 'src/customers/entities/customer.entity'
import { InvoiceDetail } from 'src/invoice-details/entities/invoice-detail.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({
    name: 'invoice_number',
    type: 'varchar',
    length: 50,
  })
  invoiceNumber: string

  @Column({
    name: 'invoice_date',
    type: 'date',
  })
  invoiceDate: Date

  @CreateDateColumn({
    name: 'creation_date',
    type: 'timestamp',
  })
  creationDate: Date

  @Column({
    name: 'auth_date',
    type: 'date',
    nullable: true,
  })
  authDate: Date | null

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer

  @OneToMany(() => InvoiceDetail, (invoiceDetail) => invoiceDetail.invoice)
  invoiceDetails: InvoiceDetail[]

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
  })
  isActive: boolean

  private static invoice: Invoice

  private constructor(
    id: number,
    invoiceNumber: string,
    invoiceDate: Date,
    creationDate: Date,
    authDate: Date | null,
    customer: Customer,
    invoiceDetails: InvoiceDetail[],
    isActive: boolean,
  ) {
    this.id = id
    this.invoiceNumber = invoiceNumber
    this.invoiceDate = invoiceDate
    this.creationDate = creationDate
    this.authDate = authDate
    this.customer = customer
    this.invoiceDetails = invoiceDetails
    this.isActive = isActive
  }

  public static getInvoice(
    id: number,
    invoiceNumber: string,
    invoiceDate: Date,
    creationDate: Date,
    authDate: Date | null,
    customer: Customer,
    invoiceDetails: InvoiceDetail[],
    isActive: boolean,
  ) {
    if (!this.invoice) {
      this.invoice = new Invoice(
        id,
        invoiceNumber,
        invoiceDate,
        creationDate,
        authDate,
        customer,
        invoiceDetails,
        isActive,
      )
    }

    return this.invoice
  }
}
