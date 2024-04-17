import { CashPayMethod } from './cash-pay-method'
import { CreditPayMethod } from './credit-pay-method'
import { DebtPayMethod } from './debit-pay-method'

export class PayMethodFactory {
  static createPayMethod(type: string) {
    switch (type) {
      case 'cash':
        return new CashPayMethod()
      case 'debit':
        return new DebtPayMethod()
      case 'credit':
        return new CreditPayMethod()
      default:
        throw new Error('Invalid pay method')
    }
  }
}
