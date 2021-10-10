import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { CreateItemDTO } from './dto/create-item'

@Injectable()
export class ItemService {

  constructor(@InjectRepository(Item) private itemRepository: Repository<Item>) {
  }

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  findOne(id: string): Promise<Item> {
    return this.itemRepository.findOne(id);
  }

  async create(item: CreateItemDTO): Promise<Item> {
    const it = await this.itemRepository.create(item);
    return this.itemRepository.save(it)
  }

  async remove(id: string): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
