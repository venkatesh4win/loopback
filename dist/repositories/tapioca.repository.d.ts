import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Tapioca, TapiocaRelations } from '../models';
export declare class TapiocaRepository extends DefaultCrudRepository<Tapioca, typeof Tapioca.prototype.id, TapiocaRelations> {
    constructor(dataSource: MongoDataSource);
}
