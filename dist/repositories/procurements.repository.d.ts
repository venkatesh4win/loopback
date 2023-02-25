import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Procurements, ProcurementsRelations } from '../models';
export declare class ProcurementsRepository extends DefaultCrudRepository<Procurements, typeof Procurements.prototype.id, ProcurementsRelations> {
    constructor(dataSource: MongoDataSource);
}
