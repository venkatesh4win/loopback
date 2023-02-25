import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RawMaterials extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  tapioca_type?: string;

  @property({
    type: 'string',
  })
  decription?: string;

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

  constructor(data?: Partial<RawMaterials>) {
    super(data);
  }
}

export interface RawMaterialsRelations {
  // describe navigational properties here
}

export type RawMaterialsWithRelations = RawMaterials & RawMaterialsRelations;
