import { Injectable } from '@nestjs/common';
import { Client } from './client.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MakeClient } from 'src/dto/client.dto';
@Injectable()
export class ClientService{
    constructor(@InjectRepository(Client) private readonly repo: Repository<Client>){}
    async findAll() :Promise<Client[]>{
        return await this.repo.find();
    }

    async makeClient(client:MakeClient):Promise<Client>{
        const createdClient = await this.repo.save(client);
        return createdClient;
    }
}
