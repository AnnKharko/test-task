import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
import { Item } from './item/entities/item.entity';
// import config from '../config';

@Module({
  imports: [
    ItemModule,
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    //   isGlobal: true,
    //   // load: [config],
    //   }),
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'author',
      password: 'qwerty',
      database: 'items',
      // entities: ['/**/*.entity(.ts,.js)'],
      entities: [Item],
      // synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}

// MongooseModule.forRootAsync({
//   imports: [ConfigModule],
//   useFactory: async (config) => {
//     return { ...config.get('mongoConfig') };
//   },
//   inject: [ConfigService],
// }),
