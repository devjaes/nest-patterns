import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { InvoiceDetailsService } from './invoice-details.service'
import { CreateInvoiceDetailDto } from './dto/create-invoice-detail.dto'
import { UpdateInvoiceDetailDto } from './dto/update-invoice-detail.dto'

@Controller('invoice-details')
export class InvoiceDetailsController {
  constructor(private readonly invoiceDetailsService: InvoiceDetailsService) {}

  @Post()
  async create(@Body() dto: CreateInvoiceDetailDto) {
    return await this.invoiceDetailsService.create(dto)
  }

  @Get()
  async findAll() {
    return await this.invoiceDetailsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.invoiceDetailsService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInvoiceDetailDto,
  ) {
    return await this.invoiceDetailsService.update(id, dto)
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.invoiceDetailsService.remove(id)
  }
}
