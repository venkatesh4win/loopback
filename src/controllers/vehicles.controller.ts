import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Vehicles} from '../models';
import {VehiclesRepository} from '../repositories';

export class VehiclesController {
  constructor(
    @repository(VehiclesRepository)
    public vehiclesRepository : VehiclesRepository,
  ) {}

  @post('/vehicles')
  @response(200, {
    description: 'Vehicles model instance',
    content: {'application/json': {schema: getModelSchemaRef(Vehicles)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehicles, {
            title: 'NewVehicles',
            exclude: ['id'],
          }),
        },
      },
    })
    vehicles: Omit<Vehicles, 'id'>,
  ): Promise<Vehicles> {
    return this.vehiclesRepository.create(vehicles);
  }

  @get('/vehicles/count')
  @response(200, {
    description: 'Vehicles model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Vehicles) where?: Where<Vehicles>,
  ): Promise<Count> {
    return this.vehiclesRepository.count(where);
  }

  @get('/vehicles')
  @response(200, {
    description: 'Array of Vehicles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Vehicles, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Vehicles) filter?: Filter<Vehicles>,
  ): Promise<Vehicles[]> {
    return this.vehiclesRepository.find(filter);
  }

  @patch('/vehicles')
  @response(200, {
    description: 'Vehicles PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehicles, {partial: true}),
        },
      },
    })
    vehicles: Vehicles,
    @param.where(Vehicles) where?: Where<Vehicles>,
  ): Promise<Count> {
    return this.vehiclesRepository.updateAll(vehicles, where);
  }

  @get('/vehicles/{id}')
  @response(200, {
    description: 'Vehicles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Vehicles, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Vehicles, {exclude: 'where'}) filter?: FilterExcludingWhere<Vehicles>
  ): Promise<Vehicles> {
    return this.vehiclesRepository.findById(id, filter);
  }

  @patch('/vehicles/{id}')
  @response(204, {
    description: 'Vehicles PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehicles, {partial: true}),
        },
      },
    })
    vehicles: Vehicles,
  ): Promise<void> {
    await this.vehiclesRepository.updateById(id, vehicles);
  }

  @put('/vehicles/{id}')
  @response(204, {
    description: 'Vehicles PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() vehicles: Vehicles,
  ): Promise<void> {
    await this.vehiclesRepository.replaceById(id, vehicles);
  }

  @del('/vehicles/{id}')
  @response(204, {
    description: 'Vehicles DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.vehiclesRepository.deleteById(id);
  }
}
