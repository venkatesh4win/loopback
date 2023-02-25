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
import {Tapioca} from '../models';
import {TapiocaRepository} from '../repositories';

export class TapiocaController {
  constructor(
    @repository(TapiocaRepository)
    public tapiocaRepository : TapiocaRepository,
  ) {}

  @post('/tapiocas')
  @response(200, {
    description: 'Tapioca model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tapioca)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tapioca, {
            title: 'NewTapioca',
            exclude: ['id'],
          }),
        },
      },
    })
    tapioca: Omit<Tapioca, 'id'>,
  ): Promise<Tapioca> {
    return this.tapiocaRepository.create(tapioca);
  }

  @get('/tapiocas/count')
  @response(200, {
    description: 'Tapioca model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tapioca) where?: Where<Tapioca>,
  ): Promise<Count> {
    return this.tapiocaRepository.count(where);
  }

  @get('/tapiocas')
  @response(200, {
    description: 'Array of Tapioca model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tapioca, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tapioca) filter?: Filter<Tapioca>,
  ): Promise<Tapioca[]> {
    return this.tapiocaRepository.find(filter);
  }

  @patch('/tapiocas')
  @response(200, {
    description: 'Tapioca PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tapioca, {partial: true}),
        },
      },
    })
    tapioca: Tapioca,
    @param.where(Tapioca) where?: Where<Tapioca>,
  ): Promise<Count> {
    return this.tapiocaRepository.updateAll(tapioca, where);
  }

  @get('/tapiocas/{id}')
  @response(200, {
    description: 'Tapioca model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tapioca, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tapioca, {exclude: 'where'}) filter?: FilterExcludingWhere<Tapioca>
  ): Promise<Tapioca> {
    return this.tapiocaRepository.findById(id, filter);
  }

  @patch('/tapiocas/{id}')
  @response(204, {
    description: 'Tapioca PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tapioca, {partial: true}),
        },
      },
    })
    tapioca: Tapioca,
  ): Promise<void> {
    await this.tapiocaRepository.updateById(id, tapioca);
  }

  @put('/tapiocas/{id}')
  @response(204, {
    description: 'Tapioca PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tapioca: Tapioca,
  ): Promise<void> {
    await this.tapiocaRepository.replaceById(id, tapioca);
  }

  @del('/tapiocas/{id}')
  @response(204, {
    description: 'Tapioca DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tapiocaRepository.deleteById(id);
  }
}
