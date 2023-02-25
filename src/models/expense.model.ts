import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Expense extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  expense_no?: string;

  @property({
    type: 'string',
  })
  party_name?: string;

  @property({
    type: 'string',
  })
  expense_type?: string;

  @property({
    type: 'string',
  })
  expense_date?: string;

  @property({
    type: 'string',
  })
  payment_due_date?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  attachments?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  expense?: object[];

  @property({
    type: 'string',
  })
  status?: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Expense>) {
    super(data);
  }
}

export interface ExpenseRelations {
  // describe navigational properties here
}

export type ExpenseWithRelations = Expense & ExpenseRelations;
