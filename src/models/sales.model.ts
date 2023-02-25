import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Sales extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  invoice_number?: string;

  @property({
    type: 'string',
  })
  sales_date?: string;

  @property({
    type: 'string',
  })
  payment_due_date?: string;

  @property({
    type: 'string',
  })
  driver_name?: string;

  @property({
    type: 'string',
  })
  place_of_supply?: string;

  @property({
    type: 'string',
  })
  time?: string;

  @property({
    type: 'string',
  })
  transit_mode?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  goods?: object[];

  @property({
    type: 'number',
  })
  top_rate?: number;

  @property({
    type: 'number',
  })
  distance?: number;

  @property({
    type: 'string',
  })
  driver_phone_no?: string;

  @property({
    type: 'string',
  })
  eway_bill_no?: string;

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
  customerId?: string;

  @property({
    type: 'string',
  })
  vehiclesId?: string;

  @property({
    type: 'string',
  })
  productsId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sales>) {
    super(data);
  }
}

export interface SalesRelations {
  // describe navigational properties here
}

export type SalesWithRelations = Sales & SalesRelations;
