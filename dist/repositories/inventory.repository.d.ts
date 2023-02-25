import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Inventory, InventoryRelations } from '../models';
export declare class InventoryRepository extends DefaultCrudRepository<Inventory, typeof Inventory.prototype.id, InventoryRelations> {
    constructor(dataSource: MongoDataSource);
}
