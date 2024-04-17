import { IsNumber, IsString } from 'class-validator'

export class CreateProductDto {
  @IsString()
  readonly code: string

  @IsString()
  readonly name: string

  @IsString()
  readonly brand: string

  @IsNumber()
  readonly price: number

  @IsNumber()
  readonly stock: number

  @IsString()
  readonly unitMeasure: string
}
