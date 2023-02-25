import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Supplier, SupplierRelations, Procurements } from '../models';
import { ProcurementsRepository } from './procurements.repository';
export declare class SupplierRepository extends DefaultCrudRepository<Supplier, typeof Supplier.prototype.id, SupplierRelations> {
    protected procurementsRepositoryGetter: Getter<ProcurementsRepository>;
    readonly procurements: HasManyRepositoryFactory<Procurements, typeof Supplier.prototype.id>;
    constructor(dataSource: MongoDataSource, procurementsRepositoryGetter: Getter<ProcurementsRepository>);
}
