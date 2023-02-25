import { Count, Filter, Where } from '@loopback/repository';
import { Products, Inventory } from '../models';
import { ProductsRepository } from '../repositories';
export declare class ProductsInventoryController {
    protected productsRepository: ProductsRepository;
    constructor(productsRepository: ProductsRepository);
    find(id: string, filter?: Filter<Inventory>): Promise<Inventory[]>;
    create(id: typeof Products.prototype.id, inventory: Omit<Inventory, 'id'>): Promise<Inventory>;
    patch(id: string, inventory: Partial<Inventory>, where?: Where<Inventory>): Promise<Count>;
    delete(id: string, where?: Where<Inventory>): Promise<Count>;
}
