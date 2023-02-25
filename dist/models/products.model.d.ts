import { Entity } from '@loopback/repository';
import { Sales } from './sales.model';
import { Inventory } from './inventory.model';
import { Procurements } from './procurements.model';
export declare class Products extends Entity {
    id?: string;
    name?: string;
    hsn?: string;
    food_safety?: string;
    tax?: number;
    unit?: string;
    description?: string;
    created?: string;
    modified?: string;
    sales: Sales[];
    inventories: Inventory[];
    procurements: Procurements[];
    [prop: string]: any;
    constructor(data?: Partial<Products>);
}
export interface ProductsRelations {
}
export type ProductsWithRelations = Products & ProductsRelations;
