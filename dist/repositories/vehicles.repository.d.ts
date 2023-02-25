import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Vehicles, VehiclesRelations, Sales, Tapioca } from '../models';
import { SalesRepository } from './sales.repository';
import { TapiocaRepository } from './tapioca.repository';
export declare class VehiclesRepository extends DefaultCrudRepository<Vehicles, typeof Vehicles.prototype.id, VehiclesRelations> {
    protected salesRepositoryGetter: Getter<SalesRepository>;
    protected tapiocaRepositoryGetter: Getter<TapiocaRepository>;
    readonly sales: HasManyRepositoryFactory<Sales, typeof Vehicles.prototype.id>;
    readonly tapiocas: HasManyRepositoryFactory<Tapioca, typeof Vehicles.prototype.id>;
    constructor(dataSource: MongoDataSource, salesRepositoryGetter: Getter<SalesRepository>, tapiocaRepositoryGetter: Getter<TapiocaRepository>);
}
