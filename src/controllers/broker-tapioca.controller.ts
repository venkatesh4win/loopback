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
  Broker,
  Tapioca,
} from '../models';
import {BrokerRepository} from '../repositories';

export class BrokerTapiocaController {
  constructor(
    @repository(BrokerRepository) protected brokerRepository: BrokerRepository,
  ) { }

  @get('/brokers/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Array of Broker has many Tapioca',
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
    return this.brokerRepository.tapiocas(id).find(filter);
  }

  @post('/brokers/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Broker model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tapioca)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Broker.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tapioca, {
            title: 'NewTapiocaInBroker',
            exclude: ['id'],
            optional: ['brokerId']
          }),
        },
      },
    }) tapioca: Omit<Tapioca, 'id'>,
  ): Promise<Tapioca> {
    return this.brokerRepository.tapiocas(id).create(tapioca);
  }

  @patch('/brokers/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Broker.Tapioca PATCH success count',
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
    return this.brokerRepository.tapiocas(id).patch(tapioca, where);
  }

  @del('/brokers/{id}/tapiocas', {
    responses: {
      '200': {
        description: 'Broker.Tapioca DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Tapioca)) where?: Where<Tapioca>,
  ): Promise<Count> {
    return this.brokerRepository.tapiocas(id).delete(where);
  }
}
