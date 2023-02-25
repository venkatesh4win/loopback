import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Procurements } from '../models';
import { ProcurementsRepository } from '../repositories';
export declare class ProcurementsController {
    procurementsRepository: ProcurementsRepository;
    constructor(procurementsRepository: ProcurementsRepository);
    create(procurements: Omit<Procurements, 'id'>): Promise<Procurements>;
    count(where?: Where<Procurements>): Promise<Count>;
    find(filter?: Filter<Procurements>): Promise<Procurements[]>;
    updateAll(procurements: Procurements, where?: Where<Procurements>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Procurements>): Promise<Procurements>;
    updateById(id: string, procurements: Procurements): Promise<void>;
    replaceById(id: string, procurements: Procurements): Promise<void>;
    deleteById(id: string): Promise<void>;
}
