import { Count, Filter, Where } from '@loopback/repository';
import { Products, Sales } from '../models';
import { ProductsRepository } from '../repositories';
export declare class ProductsSalesController {
    protected productsRepository: ProductsRepository;
    constructor(productsRepository: ProductsRepository);
    find(id: string, filter?: Filter<Sales>): Promise<Sales[]>;
    create(id: typeof Products.prototype.id, sales: Omit<Sales, 'id'>): Promise<Sales>;
    patch(id: string, sales: Partial<Sales>, where?: Where<Sales>): Promise<Count>;
    delete(id: string, where?: Where<Sales>): Promise<Count>;
}
