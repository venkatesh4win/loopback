import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tapioca extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  purchase_no?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  commission?: number;

  @property({
    type: 'string',
  })
  payment_due_date?: string;

  @property({
    type: 'string',
  })
  weight_bill_no?: string;

  @property({
    type: 'string',
  })
  farmer_details?: string;

  @property({
    type: 'string',
  })
  farmer_aadhar_no?: string;

  @property({
    type: 'object',
  })
  weight?: object;

  @property({
    type: 'object',
  })
  charge?: object;

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
  brokerId?: string;

  @property({
    type: 'string',
  })
  vehiclesId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tapioca>) {
    super(data);
  }
}

export interface TapiocaRelations {
  // describe navigational properties here
}

export type TapiocaWithRelations = Tapioca & TapiocaRelations;
