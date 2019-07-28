import {Module} from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
@Module({


  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser:true
    }),
    ClientModule]
})

export class AppModule{};