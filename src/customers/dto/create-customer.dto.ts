import {
  IsBoolean,
  IsEmail,
  IsNumberString,
  IsString,
  Length,
  MinLength,
} from 'class-validator'

export class CreateCustomerDto {
  @IsEmail()
  readonly email: string

  @IsNumberString()
  @MinLength(10)
  readonly phone: string

  @IsString()
  @Length(10, 100)
  readonly address: string

  @IsBoolean()
  readonly isActive: boolean
}
