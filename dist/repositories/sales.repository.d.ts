import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Sales, SalesRelations } from '../models';
export declare class SalesRepository extends DefaultCrudRepository<Sales, typeof Sales.prototype.id, SalesRelations> {
    constructor(dataSource: MongoDataSource);
}
