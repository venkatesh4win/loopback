import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Procurements extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  purchase_date?: string;

  @property({
    type: 'string',
  })
  payment_due_date?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  products?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  payments?: object[];

  @property({
    type: 'string',
  })
  created?: string;

  @property({
    type: 'string',
  })
  modified?: string;

  @property({
    type: 'string',
  })
  supplierId?: string;

  @property({
    type: 'string',
  })
  productsId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Procurements>) {
    super(data);
  }
}

export interface ProcurementsRelations {
  // describe navigational properties here
}

export type ProcurementsWithRelations = Procurements & ProcurementsRelations;
