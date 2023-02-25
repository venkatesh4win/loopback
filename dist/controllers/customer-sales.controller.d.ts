import { Count, Filter, Where } from '@loopback/repository';
import { Customer, Sales } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomerSalesController {
    protected customerRepository: CustomerRepository;
    constructor(customerRepository: CustomerRepository);
    find(id: string, filter?: Filter<Sales>): Promise<Sales[]>;
    create(id: typeof Customer.prototype.id, sales: Omit<Sales, 'id'>): Promise<Sales>;
    patch(id: string, sales: Partial<Sales>, where?: Where<Sales>): Promise<Count>;
    delete(id: string, where?: Where<Sales>): Promise<Count>;
}
