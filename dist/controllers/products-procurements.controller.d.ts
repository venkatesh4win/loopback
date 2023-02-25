import { Count, Filter, Where } from '@loopback/repository';
import { Products, Procurements } from '../models';
import { ProductsRepository } from '../repositories';
export declare class ProductsProcurementsController {
    protected productsRepository: ProductsRepository;
    constructor(productsRepository: ProductsRepository);
    find(id: string, filter?: Filter<Procurements>): Promise<Procurements[]>;
    create(id: typeof Products.prototype.id, procurements: Omit<Procurements, 'id'>): Promise<Procurements>;
    patch(id: string, procurements: Partial<Procurements>, where?: Where<Procurements>): Promise<Count>;
    delete(id: string, where?: Where<Procurements>): Promise<Count>;
}
