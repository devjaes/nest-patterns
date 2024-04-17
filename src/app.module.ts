import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config as dotenvConfig } from 'dotenv'
import { CustomersModule } from './customers/customers.module'
import { InvoicesModule } from './invoices/invoices.module'
import { InvoiceDetailsModule } from './invoice-details/invoice-details.module'
import { PeopleModule } from './people/people.module'
import { ProductsModule } from './products/products.module'

dotenvConfig({ path: '.env' })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      // dropSchema: true,
    }),
    CustomersModule,
    InvoicesModule,
    InvoiceDetailsModule,
    PeopleModule,
    ProductsModule,
  ],
})
export class AppModule {}
