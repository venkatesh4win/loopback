import { Entity } from '@loopback/repository';
import { Sales } from './sales.model';
export declare class Customer extends Entity {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    phone?: string;
    alt_phone?: string;
    email?: string;
    address?: string;
    aadhar?: string;
    gst?: string;
    pan?: string;
    description?: string;
    created?: string;
    modified?: string;
    sales: Sales[];
    [prop: string]: any;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export type CustomerWithRelations = Customer & CustomerRelations;
