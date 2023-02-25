import { Entity } from '@loopback/repository';
import { Tapioca } from './tapioca.model';
export declare class Broker extends Entity {
    id?: string;
    name?: string;
    address?: string;
    location?: string;
    alt_phone?: string;
    commission?: number;
    email?: string;
    phone?: string;
    gst?: string;
    pan?: string;
    bank?: object;
    created?: string;
    modified?: string;
    tapiocas: Tapioca[];
    [prop: string]: any;
    constructor(data?: Partial<Broker>);
}
export interface BrokerRelations {
}
export type BrokerWithRelations = Broker & BrokerRelations;
