import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Customer } from './entities/customer.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(dto: CreateCustomerDto) {
    const customer = this.customerRepository.create(dto)

    return await this.customerRepository.save(customer)
  }

  async findAll() {
    return await this.customerRepository.find()
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOneBy({ id })

    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`)
    }

    return customer
  }

  async update(id: number, dto: UpdateCustomerDto) {
    const customer = await this.customerRepository.preload({
      id,
      ...dto,
    })

    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`)
    }

    return await this.customerRepository.save(customer)
  }

  async remove(id: number) {
    const customer = await this.findOne(id)

    return await this.customerRepository.save({ ...customer, isActive: false })
  }
}
