import { IPayMethod } from 'src/invoices/interfaces/pay-method.interface'

export class CashPayMethod implements IPayMethod {
  tax: number = 1

  getTotalWithTax(total: number): number {
    return total * this.tax
  }
}
