import { Invoice } from 'src/invoices/entities/invoice.entity'
import { Product } from 'src/products/entities/product.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('invoice_details')
export class InvoiceDetail {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({
    name: 'quantity',
    type: 'int',
  })
  quantity: number

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceDetails)
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice

  private static invoiceDetail: InvoiceDetail

  private constructor(
    id: number,
    quantity: number,
    price: number,
    product: Product,
    invoice: Invoice,
  ) {
    this.id = id
    this.quantity = quantity
    this.price = price
    this.product = product
    this.invoice = invoice
  }

  public static getInvoiceDetail(
    id: number,
    quantity: number,
    price: number,
    product: Product,
    invoice: Invoice,
  ) {
    if (!this.invoiceDetail) {
      this.invoiceDetail = new InvoiceDetail(
        id,
        quantity,
        price,
        product,
        invoice,
      )
    }

    return this.invoiceDetail
  }
}
