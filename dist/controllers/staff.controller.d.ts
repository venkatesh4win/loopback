import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Staff } from '../models';
import { StaffRepository } from '../repositories';
export declare class StaffController {
    staffRepository: StaffRepository;
    constructor(staffRepository: StaffRepository);
    create(staff: Omit<Staff, 'id'>): Promise<Staff>;
    count(where?: Where<Staff>): Promise<Count>;
    find(filter?: Filter<Staff>): Promise<Staff[]>;
    updateAll(staff: Staff, where?: Where<Staff>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Staff>): Promise<Staff>;
    updateById(id: string, staff: Staff): Promise<void>;
    replaceById(id: string, staff: Staff): Promise<void>;
    deleteById(id: string): Promise<void>;
}
