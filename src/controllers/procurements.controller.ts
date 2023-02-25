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
import {Procurements} from '../models';
import {ProcurementsRepository} from '../repositories';

export class ProcurementsController {
  constructor(
    @repository(ProcurementsRepository)
    public procurementsRepository : ProcurementsRepository,
  ) {}

  @post('/procurements')
  @response(200, {
    description: 'Procurements model instance',
    content: {'application/json': {schema: getModelSchemaRef(Procurements)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procurements, {
            title: 'NewProcurements',
            exclude: ['id'],
          }),
        },
      },
    })
    procurements: Omit<Procurements, 'id'>,
  ): Promise<Procurements> {
    return this.procurementsRepository.create(procurements);
  }

  @get('/procurements/count')
  @response(200, {
    description: 'Procurements model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Procurements) where?: Where<Procurements>,
  ): Promise<Count> {
    return this.procurementsRepository.count(where);
  }

  @get('/procurements')
  @response(200, {
    description: 'Array of Procurements model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Procurements, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Procurements) filter?: Filter<Procurements>,
  ): Promise<Procurements[]> {
    return this.procurementsRepository.find(filter);
  }

  @patch('/procurements')
  @response(200, {
    description: 'Procurements PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procurements, {partial: true}),
        },
      },
    })
    procurements: Procurements,
    @param.where(Procurements) where?: Where<Procurements>,
  ): Promise<Count> {
    return this.procurementsRepository.updateAll(procurements, where);
  }

  @get('/procurements/{id}')
  @response(200, {
    description: 'Procurements model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Procurements, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Procurements, {exclude: 'where'}) filter?: FilterExcludingWhere<Procurements>
  ): Promise<Procurements> {
    return this.procurementsRepository.findById(id, filter);
  }

  @patch('/procurements/{id}')
  @response(204, {
    description: 'Procurements PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procurements, {partial: true}),
        },
      },
    })
    procurements: Procurements,
  ): Promise<void> {
    await this.procurementsRepository.updateById(id, procurements);
  }

  @put('/procurements/{id}')
  @response(204, {
    description: 'Procurements PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() procurements: Procurements,
  ): Promise<void> {
    await this.procurementsRepository.replaceById(id, procurements);
  }

  @del('/procurements/{id}')
  @response(204, {
    description: 'Procurements DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.procurementsRepository.deleteById(id);
  }
}
