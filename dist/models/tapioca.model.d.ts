import { Entity } from '@loopback/repository';
export declare class Tapioca extends Entity {
    id?: string;
    purchase_no?: string;
    type?: string;
    commission?: number;
    payment_due_date?: string;
    weight_bill_no?: string;
    farmer_details?: string;
    farmer_aadhar_no?: string;
    weight?: object;
    charge?: object;
    payments?: object[];
    created?: string;
    modified?: string;
    brokerId?: string;
    vehiclesId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Tapioca>);
}
export interface TapiocaRelations {
}
export type TapiocaWithRelations = Tapioca & TapiocaRelations;
