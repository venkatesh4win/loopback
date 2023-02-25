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
  Vehicles,
  Sales,
} from '../models';
import {VehiclesRepository} from '../repositories';

export class VehiclesSalesController {
  constructor(
    @repository(VehiclesRepository) protected vehiclesRepository: VehiclesRepository,
  ) { }

  @get('/vehicles/{id}/sales', {
    responses: {
      '200': {
        description: 'Array of Vehicles has many Sales',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sales)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Sales>,
  ): Promise<Sales[]> {
    return this.vehiclesRepository.sales(id).find(filter);
  }

  @post('/vehicles/{id}/sales', {
    responses: {
      '200': {
        description: 'Vehicles model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sales)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Vehicles.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sales, {
            title: 'NewSalesInVehicles',
            exclude: ['id'],
            optional: ['vehiclesId']
          }),
        },
      },
    }) sales: Omit<Sales, 'id'>,
  ): Promise<Sales> {
    return this.vehiclesRepository.sales(id).create(sales);
  }

  @patch('/vehicles/{id}/sales', {
    responses: {
      '200': {
        description: 'Vehicles.Sales PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sales, {partial: true}),
        },
      },
    })
    sales: Partial<Sales>,
    @param.query.object('where', getWhereSchemaFor(Sales)) where?: Where<Sales>,
  ): Promise<Count> {
    return this.vehiclesRepository.sales(id).patch(sales, where);
  }

  @del('/vehicles/{id}/sales', {
    responses: {
      '200': {
        description: 'Vehicles.Sales DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Sales)) where?: Where<Sales>,
  ): Promise<Count> {
    return this.vehiclesRepository.sales(id).delete(where);
  }
}
