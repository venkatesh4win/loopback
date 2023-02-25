import { Model } from '@loopback/repository';
export declare class ResetPasswordInit extends Model {
    email: string;
    constructor(data?: Partial<ResetPasswordInit>);
}
export interface ResetPasswordInitRelations {
}
export type ResetPasswordInitWithRelations = ResetPasswordInit & ResetPasswordInitRelations;
