import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Sales } from '../models';
import { SalesRepository } from '../repositories';
export declare class SalesController {
    salesRepository: SalesRepository;
    constructor(salesRepository: SalesRepository);
    create(sales: Omit<Sales, 'id'>): Promise<Sales>;
    count(where?: Where<Sales>): Promise<Count>;
    find(filter?: Filter<Sales>): Promise<Sales[]>;
    updateAll(sales: Sales, where?: Where<Sales>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Sales>): Promise<Sales>;
    updateById(id: string, sales: Sales): Promise<void>;
    replaceById(id: string, sales: Sales): Promise<void>;
    deleteById(id: string): Promise<void>;
}
