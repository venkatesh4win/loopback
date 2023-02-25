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
  Tapioca,
} from '../models';
import {VehiclesRepository} from '../repositories';

export class VehiclesTapiocaController {
  constructor(
    @repository(VehiclesRepository) protected vehiclesRepository: VehiclesRepository,
  ) { }

  @get('/vehicles/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Array of Vehicles has many Tapioca',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tapioca)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Tapioca>,
  ): Promise<Tapioca[]> {
    return this.vehiclesRepository.tapiocas(id).find(filter);
  }

  @post('/vehicles/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Vehicles model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tapioca)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Vehicles.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tapioca, {
            title: 'NewTapiocaInVehicles',
            exclude: ['id'],
            optional: ['vehiclesId']
          }),
        },
      },
    }) tapioca: Omit<Tapioca, 'id'>,
  ): Promise<Tapioca> {
    return this.vehiclesRepository.tapiocas(id).create(tapioca);
  }

  @patch('/vehicles/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Vehicles.Tapioca PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tapioca, {partial: true}),
        },
      },
    })
    tapioca: Partial<Tapioca>,
    @param.query.object('where', getWhereSchemaFor(Tapioca)) where?: Where<Tapioca>,
  ): Promise<Count> {
    return this.vehiclesRepository.tapiocas(id).patch(tapioca, where);
  }

  @del('/vehicles/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Vehicles.Tapioca DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Tapioca)) where?: Where<Tapioca>,
  ): Promise<Count> {
    return this.vehiclesRepository.tapiocas(id).delete(where);
  }
}
