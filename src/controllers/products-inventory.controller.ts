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
  Inventory,
} from '../models';
import {ProductsRepository} from '../repositories';

export class ProductsInventoryController {
  constructor(
    @repository(ProductsRepository) protected productsRepository: ProductsRepository,
  ) { }

  @get('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Array of Products has many Inventory',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inventory)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Inventory>,
  ): Promise<Inventory[]> {
    return this.productsRepository.inventories(id).find(filter);
  }

  @post('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Products model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inventory)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Products.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventory, {
            title: 'NewInventoryInProducts',
            exclude: ['id'],
            optional: ['productsId']
          }),
        },
      },
    }) inventory: Omit<Inventory, 'id'>,
  ): Promise<Inventory> {
    return this.productsRepository.inventories(id).create(inventory);
  }

  @patch('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Products.Inventory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventory, {partial: true}),
        },
      },
    })
    inventory: Partial<Inventory>,
    @param.query.object('where', getWhereSchemaFor(Inventory)) where?: Where<Inventory>,
  ): Promise<Count> {
    return this.productsRepository.inventories(id).patch(inventory, where);
  }

  @del('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Products.Inventory DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Inventory)) where?: Where<Inventory>,
  ): Promise<Count> {
    return this.productsRepository.inventories(id).delete(where);
  }
}
