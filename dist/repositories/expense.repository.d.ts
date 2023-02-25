import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Expense, ExpenseRelations } from '../models';
export declare class ExpenseRepository extends DefaultCrudRepository<Expense, typeof Expense.prototype.id, ExpenseRelations> {
    constructor(dataSource: MongoDataSource);
}
