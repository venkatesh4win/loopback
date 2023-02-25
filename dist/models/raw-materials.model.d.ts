import { Entity } from '@loopback/repository';
export declare class RawMaterials extends Entity {
    id?: string;
    tapioca_type?: string;
    decription?: string;
    created?: string;
    modified?: string;
    [prop: string]: any;
    constructor(data?: Partial<RawMaterials>);
}
export interface RawMaterialsRelations {
}
export type RawMaterialsWithRelations = RawMaterials & RawMaterialsRelations;
