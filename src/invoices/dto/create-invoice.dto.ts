import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator'
import { PaymentTypes } from 'src/shared/PaymentTypes'

export class CreateInvoiceDto {
  @IsString()
  readonly invoiceNumber: string

  @IsDate()
  readonly invoiceDate: Date

  @IsDate()
  readonly authDate: Date

  @IsNumber()
  readonly customerId: number

  @IsBoolean()
  readonly isActive: boolean

  @IsEnum(PaymentTypes)
  readonly paymentMethod: PaymentTypes
}
