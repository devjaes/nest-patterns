import { IsNumber, IsString, Min, MinLength } from 'class-validator'

export class CreateInvoiceDetailDto {
  @IsString()
  @MinLength(5)
  readonly product: string

  @IsNumber()
  @Min(0)
  readonly quantity: number

  @IsNumber()
  @Min(0)
  readonly price: number

  @IsNumber()
  readonly invoiceId: number
}
