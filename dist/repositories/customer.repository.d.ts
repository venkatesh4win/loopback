import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Customer, CustomerRelations, Sales } from '../models';
import { SalesRepository } from './sales.repository';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id, CustomerRelations> {
    protected salesRepositoryGetter: Getter<SalesRepository>;
    readonly sales: HasManyRepositoryFactory<Sales, typeof Customer.prototype.id>;
    constructor(dataSource: MongoDataSource, salesRepositoryGetter: Getter<SalesRepository>);
}
