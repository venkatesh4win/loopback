import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Inventory } from '../models';
import { InventoryRepository } from '../repositories';
export declare class InventoryController {
    inventoryRepository: InventoryRepository;
    constructor(inventoryRepository: InventoryRepository);
    create(inventory: Omit<Inventory, 'id'>): Promise<Inventory>;
    count(where?: Where<Inventory>): Promise<Count>;
    find(filter?: Filter<Inventory>): Promise<Inventory[]>;
    updateAll(inventory: Inventory, where?: Where<Inventory>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Inventory>): Promise<Inventory>;
    updateById(id: string, inventory: Inventory): Promise<void>;
    replaceById(id: string, inventory: Inventory): Promise<void>;
    deleteById(id: string): Promise<void>;
}
