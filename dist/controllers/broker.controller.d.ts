import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Broker } from '../models';
import { BrokerRepository } from '../repositories';
export declare class BrokerController {
    brokerRepository: BrokerRepository;
    constructor(brokerRepository: BrokerRepository);
    create(broker: Omit<Broker, 'id'>): Promise<Broker>;
    count(where?: Where<Broker>): Promise<Count>;
    find(filter?: Filter<Broker>): Promise<Broker[]>;
    updateAll(broker: Broker, where?: Where<Broker>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Broker>): Promise<Broker>;
    updateById(id: string, broker: Broker): Promise<void>;
    replaceById(id: string, broker: Broker): Promise<void>;
    deleteById(id: string): Promise<void>;
}
