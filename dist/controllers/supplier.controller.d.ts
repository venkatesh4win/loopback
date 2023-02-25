import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Supplier } from '../models';
import { SupplierRepository } from '../repositories';
export declare class SupplierController {
    supplierRepository: SupplierRepository;
    constructor(supplierRepository: SupplierRepository);
    create(supplier: Omit<Supplier, 'id'>): Promise<Supplier>;
    count(where?: Where<Supplier>): Promise<Count>;
    find(filter?: Filter<Supplier>): Promise<Supplier[]>;
    updateAll(supplier: Supplier, where?: Where<Supplier>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Supplier>): Promise<Supplier>;
    updateById(id: string, supplier: Supplier): Promise<void>;
    replaceById(id: string, supplier: Supplier): Promise<void>;
    deleteById(id: string): Promise<void>;
}
