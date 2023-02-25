import {Entity, model, property, hasMany} from '@loopback/repository';
import {Sales} from './sales.model';
import {Inventory} from './inventory.model';
import {Procurements} from './procurements.model';

@model({settings: {strict: false}})
export class Products extends Entity {
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
  hsn?: string;

  @property({
    type: 'string',
  })
  food_safety?: string;

  @property({
    type: 'number',
  })
  tax?: number;

  @property({
    type: 'string',
  })
  unit?: string;

  @property({
    type: 'string',
  })
  description?: string;

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

  @hasMany(() => Inventory)
  inventories: Inventory[];

  @hasMany(() => Procurements)
  procurements: Procurements[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
