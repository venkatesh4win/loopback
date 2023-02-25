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
import {RawMaterials} from '../models';
import {RawMaterialsRepository} from '../repositories';

export class RawMaterialsController {
  constructor(
    @repository(RawMaterialsRepository)
    public rawMaterialsRepository : RawMaterialsRepository,
  ) {}

  @post('/raw-materials')
  @response(200, {
    description: 'RawMaterials model instance',
    content: {'application/json': {schema: getModelSchemaRef(RawMaterials)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawMaterials, {
            title: 'NewRawMaterials',
            exclude: ['id'],
          }),
        },
      },
    })
    rawMaterials: Omit<RawMaterials, 'id'>,
  ): Promise<RawMaterials> {
    return this.rawMaterialsRepository.create(rawMaterials);
  }

  @get('/raw-materials/count')
  @response(200, {
    description: 'RawMaterials model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RawMaterials) where?: Where<RawMaterials>,
  ): Promise<Count> {
    return this.rawMaterialsRepository.count(where);
  }

  @get('/raw-materials')
  @response(200, {
    description: 'Array of RawMaterials model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RawMaterials, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RawMaterials) filter?: Filter<RawMaterials>,
  ): Promise<RawMaterials[]> {
    return this.rawMaterialsRepository.find(filter);
  }

  @patch('/raw-materials')
  @response(200, {
    description: 'RawMaterials PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawMaterials, {partial: true}),
        },
      },
    })
    rawMaterials: RawMaterials,
    @param.where(RawMaterials) where?: Where<RawMaterials>,
  ): Promise<Count> {
    return this.rawMaterialsRepository.updateAll(rawMaterials, where);
  }

  @get('/raw-materials/{id}')
  @response(200, {
    description: 'RawMaterials model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RawMaterials, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RawMaterials, {exclude: 'where'}) filter?: FilterExcludingWhere<RawMaterials>
  ): Promise<RawMaterials> {
    return this.rawMaterialsRepository.findById(id, filter);
  }

  @patch('/raw-materials/{id}')
  @response(204, {
    description: 'RawMaterials PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawMaterials, {partial: true}),
        },
      },
    })
    rawMaterials: RawMaterials,
  ): Promise<void> {
    await this.rawMaterialsRepository.updateById(id, rawMaterials);
  }

  @put('/raw-materials/{id}')
  @response(204, {
    description: 'RawMaterials PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rawMaterials: RawMaterials,
  ): Promise<void> {
    await this.rawMaterialsRepository.replaceById(id, rawMaterials);
  }

  @del('/raw-materials/{id}')
  @response(204, {
    description: 'RawMaterials DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rawMaterialsRepository.deleteById(id);
  }
}
