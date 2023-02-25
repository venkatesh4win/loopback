import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tapioca } from '../models';
import { TapiocaRepository } from '../repositories';
export declare class TapiocaController {
    tapiocaRepository: TapiocaRepository;
    constructor(tapiocaRepository: TapiocaRepository);
    create(tapioca: Omit<Tapioca, 'id'>): Promise<Tapioca>;
    count(where?: Where<Tapioca>): Promise<Count>;
    find(filter?: Filter<Tapioca>): Promise<Tapioca[]>;
    updateAll(tapioca: Tapioca, where?: Where<Tapioca>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Tapioca>): Promise<Tapioca>;
    updateById(id: string, tapioca: Tapioca): Promise<void>;
    replaceById(id: string, tapioca: Tapioca): Promise<void>;
    deleteById(id: string): Promise<void>;
}
