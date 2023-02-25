import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Vehicles } from '../models';
import { VehiclesRepository } from '../repositories';
export declare class VehiclesController {
    vehiclesRepository: VehiclesRepository;
    constructor(vehiclesRepository: VehiclesRepository);
    create(vehicles: Omit<Vehicles, 'id'>): Promise<Vehicles>;
    count(where?: Where<Vehicles>): Promise<Count>;
    find(filter?: Filter<Vehicles>): Promise<Vehicles[]>;
    updateAll(vehicles: Vehicles, where?: Where<Vehicles>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Vehicles>): Promise<Vehicles>;
    updateById(id: string, vehicles: Vehicles): Promise<void>;
    replaceById(id: string, vehicles: Vehicles): Promise<void>;
    deleteById(id: string): Promise<void>;
}
