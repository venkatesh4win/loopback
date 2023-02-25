import { Entity } from '@loopback/repository';
export declare class Books extends Entity {
    id?: string;
    name?: string;
    userId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Books>);
}
export interface BooksRelations {
}
export type BooksWithRelations = Books & BooksRelations;
