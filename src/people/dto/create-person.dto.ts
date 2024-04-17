import { IsDate, IsString } from 'class-validator'

export class CreatePersonDto {
  @IsString()
  readonly dni: string

  @IsString()
  readonly name: string

  @IsString()
  readonly secondName: string

  @IsString()
  readonly lastname: string

  @IsString()
  readonly secondLastname: string

  @IsString()
  readonly fullName: string

  @IsDate()
  readonly birthDate: Date
}
