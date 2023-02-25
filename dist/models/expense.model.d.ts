import { Entity } from '@loopback/repository';
export declare class Expense extends Entity {
    id?: string;
    expense_no?: string;
    party_name?: string;
    expense_type?: string;
    expense_date?: string;
    payment_due_date?: string;
    attachments?: string[];
    expense?: object[];
    status?: string;
    payments?: object[];
    created?: string;
    modified?: string;
    [prop: string]: any;
    constructor(data?: Partial<Expense>);
}
export interface ExpenseRelations {
}
export type ExpenseWithRelations = Expense & ExpenseRelations;
