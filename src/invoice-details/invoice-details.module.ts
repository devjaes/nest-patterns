import { Module } from '@nestjs/common'
import { InvoiceDetailsService } from './invoice-details.service'
import { InvoiceDetailsController } from './invoice-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InvoiceDetail } from './entities/invoice-detail.entity'

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceDetail])],
  controllers: [InvoiceDetailsController],
  providers: [InvoiceDetailsService],
})
export class InvoiceDetailsModule {}
