import { Entity } from '@loopback/repository';
export declare class Procurements extends Entity {
    id?: string;
    purchase_date?: string;
    payment_due_date?: string;
    products?: object[];
    payments?: object[];
    created?: string;
    modified?: string;
    supplierId?: string;
    productsId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Procurements>);
}
export interface ProcurementsRelations {
}
export type ProcurementsWithRelations = Procurements & ProcurementsRelations;
