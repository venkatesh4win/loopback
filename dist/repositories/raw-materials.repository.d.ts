import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { RawMaterials, RawMaterialsRelations } from '../models';
export declare class RawMaterialsRepository extends DefaultCrudRepository<RawMaterials, typeof RawMaterials.prototype.id, RawMaterialsRelations> {
    constructor(dataSource: MongoDataSource);
}
