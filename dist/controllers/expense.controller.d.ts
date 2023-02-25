import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Expense } from '../models';
import { ExpenseRepository } from '../repositories';
export declare class ExpenseController {
    expenseRepository: ExpenseRepository;
    constructor(expenseRepository: ExpenseRepository);
    create(expense: Omit<Expense, 'id'>): Promise<Expense>;
    count(where?: Where<Expense>): Promise<Count>;
    find(filter?: Filter<Expense>): Promise<Expense[]>;
    updateAll(expense: Expense, where?: Where<Expense>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Expense>): Promise<Expense>;
    updateById(id: string, expense: Expense): Promise<void>;
    replaceById(id: string, expense: Expense): Promise<void>;
    deleteById(id: string): Promise<void>;
}
