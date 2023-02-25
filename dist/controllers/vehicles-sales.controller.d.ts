import { Count, Filter, Where } from '@loopback/repository';
import { Vehicles, Sales } from '../models';
import { VehiclesRepository } from '../repositories';
export declare class VehiclesSalesController {
    protected vehiclesRepository: VehiclesRepository;
    constructor(vehiclesRepository: VehiclesRepository);
    find(id: string, filter?: Filter<Sales>): Promise<Sales[]>;
    create(id: typeof Vehicles.prototype.id, sales: Omit<Sales, 'id'>): Promise<Sales>;
    patch(id: string, sales: Partial<Sales>, where?: Where<Sales>): Promise<Count>;
    delete(id: string, where?: Where<Sales>): Promise<Count>;
}
