import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Books, BooksRelations } from '../models';
export declare class BooksRepository extends DefaultCrudRepository<Books, typeof Books.prototype.id, BooksRelations> {
    constructor(dataSource: MongoDataSource);
}
