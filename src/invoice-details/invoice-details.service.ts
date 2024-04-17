import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateInvoiceDetailDto } from './dto/create-invoice-detail.dto'
import { UpdateInvoiceDetailDto } from './dto/update-invoice-detail.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { InvoiceDetail } from './entities/invoice-detail.entity'
import { Repository } from 'typeorm'

@Injectable()
export class InvoiceDetailsService {
  constructor(
    @InjectRepository(InvoiceDetail)
    private readonly invoiceDetailRepository: Repository<InvoiceDetail>,
  ) {}

  async create(dto: CreateInvoiceDetailDto) {
    // const invoiceDetail = this.invoiceDetailRepository.create({
    //   ...dto,
    //   invoice: { id: dto.invoiceId },
    // })
    // return await this.invoiceDetailRepository.save(invoiceDetail)
  }

  async findAll() {
    return await this.invoiceDetailRepository.find()
  }

  async findOne(id: number) {
    const invoiceDetail = await this.invoiceDetailRepository.findOneBy({ id })

    if (!invoiceDetail) {
      throw new NotFoundException(`InvoiceDetail with id ${id} not found`)
    }

    return invoiceDetail
  }

  async update(id: number, dto: UpdateInvoiceDetailDto) {
    // const invoiceDetail = await this.invoiceDetailRepository.preload({
    //   id,
    //   ...dto,
    // })
    // if (!invoiceDetail) {
    //   throw new NotFoundException(`InvoiceDetail with id ${id} not found`)
    // }
    // return await this.invoiceDetailRepository.save(invoiceDetail)
  }

  async remove(id: number) {
    const invoiceDetail = await this.findOne(id)

    return await this.invoiceDetailRepository.delete(invoiceDetail)
  }
}
