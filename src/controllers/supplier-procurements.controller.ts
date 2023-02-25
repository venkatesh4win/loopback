import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Supplier,
  Procurements,
} from '../models';
import {SupplierRepository} from '../repositories';

export class SupplierProcurementsController {
  constructor(
    @repository(SupplierRepository) protected supplierRepository: SupplierRepository,
  ) { }

  @get('/suppliers/{id}/procurements', {
    responses: {
      '200': {
        description: 'Array of Supplier has many Procurements',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Procurements)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Procurements>,
  ): Promise<Procurements[]> {
    return this.supplierRepository.procurements(id).find(filter);
  }

  @post('/suppliers/{id}/procurements', {
    responses: {
      '200': {
        description: 'Supplier model instance',
        content: {'application/json': {schema: getModelSchemaRef(Procurements)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Supplier.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procurements, {
            title: 'NewProcurementsInSupplier',
            exclude: ['id'],
            optional: ['supplierId']
          }),
        },
      },
    }) procurements: Omit<Procurements, 'id'>,
  ): Promise<Procurements> {
    return this.supplierRepository.procurements(id).create(procurements);
  }

  @patch('/suppliers/{id}/procurements', {
    responses: {
      '200': {
        description: 'Supplier.Procurements PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procurements, {partial: true}),
        },
      },
    })
    procurements: Partial<Procurements>,
    @param.query.object('where', getWhereSchemaFor(Procurements)) where?: Where<Procurements>,
  ): Promise<Count> {
    return this.supplierRepository.procurements(id).patch(procurements, where);
  }

  @del('/suppliers/{id}/procurements', {
    responses: {
      '200': {
        description: 'Supplier.Procurements DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Procurements)) where?: Where<Procurements>,
  ): Promise<Count> {
    return this.supplierRepository.procurements(id).delete(where);
  }
}
