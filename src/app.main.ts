import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function builder(){
    const app = await NestFactory.create(AppModule);
    app.listen(3000)
}

builder();