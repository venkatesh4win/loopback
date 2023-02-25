import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Products, ProductsRelations, Sales, Inventory, Procurements } from '../models';
import { SalesRepository } from './sales.repository';
import { InventoryRepository } from './inventory.repository';
import { ProcurementsRepository } from './procurements.repository';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.id, ProductsRelations> {
    protected salesRepositoryGetter: Getter<SalesRepository>;
    protected inventoryRepositoryGetter: Getter<InventoryRepository>;
    protected procurementsRepositoryGetter: Getter<ProcurementsRepository>;
    readonly sales: HasManyRepositoryFactory<Sales, typeof Products.prototype.id>;
    readonly inventories: HasManyRepositoryFactory<Inventory, typeof Products.prototype.id>;
    readonly procurements: HasManyRepositoryFactory<Procurements, typeof Products.prototype.id>;
    constructor(dataSource: MongoDataSource, salesRepositoryGetter: Getter<SalesRepository>, inventoryRepositoryGetter: Getter<InventoryRepository>, procurementsRepositoryGetter: Getter<ProcurementsRepository>);
}
