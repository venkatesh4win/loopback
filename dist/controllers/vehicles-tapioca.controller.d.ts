import { Count, Filter, Where } from '@loopback/repository';
import { Vehicles, Tapioca } from '../models';
import { VehiclesRepository } from '../repositories';
export declare class VehiclesTapiocaController {
    protected vehiclesRepository: VehiclesRepository;
    constructor(vehiclesRepository: VehiclesRepository);
    find(id: string, filter?: Filter<Tapioca>): Promise<Tapioca[]>;
    create(id: typeof Vehicles.prototype.id, tapioca: Omit<Tapioca, 'id'>): Promise<Tapioca>;
    patch(id: string, tapioca: Partial<Tapioca>, where?: Where<Tapioca>): Promise<Count>;
    delete(id: string, where?: Where<Tapioca>): Promise<Count>;
}
