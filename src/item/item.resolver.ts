import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item } from './entities/item.entity';
import { ItemService } from './item.service';
import { CreateItemDTO } from './dto/create-item';

@Resolver(() => Item)
export class ItemResolver {
 constructor(private itemService: ItemService) {}

  @Query(() => [Item], {name: 'findAllItems'})
  findItems(){
   return this.itemService.findAll();
  }

  @Mutation(() => Item, {name: 'createItem'})
  create(@Args('item') item: CreateItemDTO){
  return this.itemService.create(item);
  }
  // @Query(() => Item, {name: 'findItemById'})
  // findItem(){
  //   return this.itemService.findOne(id);
  // }
}
