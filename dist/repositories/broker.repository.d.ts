import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Broker, BrokerRelations, Tapioca } from '../models';
import { TapiocaRepository } from './tapioca.repository';
export declare class BrokerRepository extends DefaultCrudRepository<Broker, typeof Broker.prototype.id, BrokerRelations> {
    protected tapiocaRepositoryGetter: Getter<TapiocaRepository>;
    readonly tapiocas: HasManyRepositoryFactory<Tapioca, typeof Broker.prototype.id>;
    constructor(dataSource: MongoDataSource, tapiocaRepositoryGetter: Getter<TapiocaRepository>);
}
