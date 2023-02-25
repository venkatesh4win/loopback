import { Entity } from '@loopback/repository';
import { Procurements } from './procurements.model';
export declare class Supplier extends Entity {
    id?: string;
    name?: string;
    type?: string;
    address?: string;
    location?: string;
    phone?: string;
    alt_phone?: string;
    bank?: object;
    gst?: string;
    pan?: string;
    description?: string;
    created?: string;
    modified?: string;
    procurements: Procurements[];
    [prop: string]: any;
    constructor(data?: Partial<Supplier>);
}
export interface SupplierRelations {
}
export type SupplierWithRelations = Supplier & SupplierRelations;
