import { Count, Filter, Where } from '@loopback/repository';
import { Broker, Tapioca } from '../models';
import { BrokerRepository } from '../repositories';
export declare class BrokerTapiocaController {
    protected brokerRepository: BrokerRepository;
    constructor(brokerRepository: BrokerRepository);
    find(id: string, filter?: Filter<Tapioca>): Promise<Tapioca[]>;
    create(id: typeof Broker.prototype.id, tapioca: Omit<Tapioca, 'id'>): Promise<Tapioca>;
    patch(id: string, tapioca: Partial<Tapioca>, where?: Where<Tapioca>): Promise<Count>;
    delete(id: string, where?: Where<Tapioca>): Promise<Count>;
}
