import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Staff, StaffRelations } from '../models';
export declare class StaffRepository extends DefaultCrudRepository<Staff, typeof Staff.prototype.id, StaffRelations> {
    constructor(dataSource: MongoDataSource);
}
