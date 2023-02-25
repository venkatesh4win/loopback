import { Entity } from '@loopback/repository';
import { Sales } from './sales.model';
import { Tapioca } from './tapioca.model';
export declare class Vehicles extends Entity {
    id?: string;
    name?: string;
    phone?: string;
    type?: string;
    vehicle_no?: string;
    ownership_type?: string;
    description?: string;
    address?: string;
    created?: string;
    modified?: string;
    sales: Sales[];
    tapiocas: Tapioca[];
    [prop: string]: any;
    constructor(data?: Partial<Vehicles>);
}
export interface VehiclesRelations {
}
export type VehiclesWithRelations = Vehicles & VehiclesRelations;
