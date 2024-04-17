export class DebtPayMethod {
  tax = 1.2
  getTotalWithTax(total) {
    return total * this.tax
  }
}
