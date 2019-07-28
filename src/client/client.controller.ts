import { Controller, Get, Post, Body } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { MakeClient } from 'src/dto/client.dto';



@Controller('client')
export class ClientController {
    constructor(public service:ClientService){}

    @Get()
    async findAll():Promise<Client[]>{
        return this.service.findAll();
    }

    @Post()
    async makeOne(@Body() client:MakeClient):Promise<Client>{
        return this.service.makeClient(client);
    }
}
