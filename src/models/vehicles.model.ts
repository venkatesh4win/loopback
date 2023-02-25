import {Entity, model, property, hasMany} from '@loopback/repository';
import {Sales} from './sales.model';
import {Tapioca} from './tapioca.model';

@model({settings: {strict: false}})
export class Vehicles extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  vehicle_no?: string;

  @property({
    type: 'string',
  })
  ownership_type?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  created?: string;

  @property({
    type: 'string',
  })
  modified?: string;

  @hasMany(() => Sales)
  sales: Sales[];

  @hasMany(() => Tapioca)
  tapiocas: Tapioca[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vehicles>) {
    super(data);
  }
}

export interface VehiclesRelations {
  // describe navigational properties here
}

export type VehiclesWithRelations = Vehicles & VehiclesRelations;
