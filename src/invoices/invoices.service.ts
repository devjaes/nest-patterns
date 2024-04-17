import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateInvoiceDto } from './dto/create-invoice.dto'
import { UpdateInvoiceDto } from './dto/update-invoice.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Invoice } from './entities/invoice.entity'
import { Repository } from 'typeorm'

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}

  async create(dto: CreateInvoiceDto) {
    const invoice = this.invoiceRepository.create({
      ...dto,
      customer: { id: dto.customerId },
    })

    return await this.invoiceRepository.save(invoice)
  }

  async findAll() {
    return await this.invoiceRepository.find()
  }

  async findOne(id: number) {
    const invoice = await this.invoiceRepository.findOneBy({ id })

    if (!invoice) {
      throw new NotFoundException(`Invoice with id ${id} not found`)
    }

    return invoice
  }

  async update(id: number, dto: UpdateInvoiceDto) {
    const invoice = await this.invoiceRepository.preload({
      id,
      ...dto,
    })

    if (!invoice) {
      throw new NotFoundException(`Invoice with id ${id} not found`)
    }

    return await this.invoiceRepository.save(invoice)
  }

  async remove(id: number) {
    const invoice = await this.findOne(id)

    return await this.invoiceRepository.save({ ...invoice, isActive: false })
  }
}
