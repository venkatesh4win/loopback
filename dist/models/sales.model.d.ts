import { Entity } from '@loopback/repository';
export declare class Sales extends Entity {
    id?: string;
    type?: string;
    invoice_number?: string;
    sales_date?: string;
    payment_due_date?: string;
    driver_name?: string;
    place_of_supply?: string;
    time?: string;
    transit_mode?: string;
    goods?: object[];
    top_rate?: number;
    distance?: number;
    driver_phone_no?: string;
    eway_bill_no?: string;
    payments?: object[];
    created?: string;
    modified?: string;
    customerId?: string;
    vehiclesId?: string;
    productsId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Sales>);
}
export interface SalesRelations {
}
export type SalesWithRelations = Sales & SalesRelations;
