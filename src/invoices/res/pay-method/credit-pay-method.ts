export class CreditPayMethod {
  tax = 1.1
  getTotalWithTax(total) {
    return total * this.tax
  }
}
