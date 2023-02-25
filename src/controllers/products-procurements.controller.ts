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
  Products,
  Procurements,
} from '../models';
import {ProductsRepository} from '../repositories';

export class ProductsProcurementsController {
  constructor(
    @repository(ProductsRepository) protected productsRepository: ProductsRepository,
  ) { }

  @get('/products/{id}/procurements', {
    responses: {
      '200': {
        description: 'Array of Products has many Procurements',
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
    return this.productsRepository.procurements(id).find(filter);
  }

  @post('/products/{id}/procurements', {
    responses: {
      '200': {
        description: 'Products model instance',
        content: {'application/json': {schema: getModelSchemaRef(Procurements)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Products.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procurements, {
            title: 'NewProcurementsInProducts',
            exclude: ['id'],
            optional: ['productsId']
          }),
        },
      },
    }) procurements: Omit<Procurements, 'id'>,
  ): Promise<Procurements> {
    return this.productsRepository.procurements(id).create(procurements);
  }

  @patch('/products/{id}/procurements', {
    responses: {
      '200': {
        description: 'Products.Procurements PATCH success count',
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
    return this.productsRepository.procurements(id).patch(procurements, where);
  }

  @del('/products/{id}/procurements', {
    responses: {
      '200': {
        description: 'Products.Procurements DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Procurements)) where?: Where<Procurements>,
  ): Promise<Count> {
    return this.productsRepository.procurements(id).delete(where);
  }
}
