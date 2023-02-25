import { Count, Filter, Where } from '@loopback/repository';
import { Supplier, Procurements } from '../models';
import { SupplierRepository } from '../repositories';
export declare class SupplierProcurementsController {
    protected supplierRepository: SupplierRepository;
    constructor(supplierRepository: SupplierRepository);
    find(id: string, filter?: Filter<Procurements>): Promise<Procurements[]>;
    create(id: typeof Supplier.prototype.id, procurements: Omit<Procurements, 'id'>): Promise<Procurements>;
    patch(id: string, procurements: Partial<Procurements>, where?: Where<Procurements>): Promise<Count>;
    delete(id: string, where?: Where<Procurements>): Promise<Count>;
}
