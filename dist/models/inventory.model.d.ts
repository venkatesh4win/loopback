import { Entity } from '@loopback/repository';
export declare class Inventory extends Entity {
    id?: string;
    entry_date?: string;
    total_bags?: number;
    created?: string;
    modified?: string;
    productsId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Inventory>);
}
export interface InventoryRelations {
}
export type InventoryWithRelations = Inventory & InventoryRelations;
