import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { RawMaterials } from '../models';
import { RawMaterialsRepository } from '../repositories';
export declare class RawMaterialsController {
    rawMaterialsRepository: RawMaterialsRepository;
    constructor(rawMaterialsRepository: RawMaterialsRepository);
    create(rawMaterials: Omit<RawMaterials, 'id'>): Promise<RawMaterials>;
    count(where?: Where<RawMaterials>): Promise<Count>;
    find(filter?: Filter<RawMaterials>): Promise<RawMaterials[]>;
    updateAll(rawMaterials: RawMaterials, where?: Where<RawMaterials>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<RawMaterials>): Promise<RawMaterials>;
    updateById(id: string, rawMaterials: RawMaterials): Promise<void>;
    replaceById(id: string, rawMaterials: RawMaterials): Promise<void>;
    deleteById(id: string): Promise<void>;
}
