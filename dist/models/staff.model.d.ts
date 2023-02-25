import { Entity } from '@loopback/repository';
export declare class Staff extends Entity {
    id?: string;
    name?: string;
    address?: string;
    phone?: string;
    work?: string;
    img?: string;
    altphone?: string;
    designation?: string;
    qualification?: string;
    aadhar?: string;
    pan?: string;
    description?: string;
    created?: string;
    modified?: string;
    [prop: string]: any;
    constructor(data?: Partial<Staff>);
}
export interface StaffRelations {
}
export type StaffWithRelations = Staff & StaffRelations;
