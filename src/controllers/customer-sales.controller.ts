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
  Customer,
  Sales,
} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerSalesController {
  constructor(
    @repository(CustomerRepository) protected customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/sales', {
    responses: {
      '200': {
        description: 'Array of Customer has many Sales',
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
    return this.customerRepository.sales(id).find(filter);
  }

  @post('/customers/{id}/sales', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sales)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Customer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sales, {
            title: 'NewSalesInCustomer',
            exclude: ['id'],
            optional: ['customerId']
          }),
        },
      },
    }) sales: Omit<Sales, 'id'>,
  ): Promise<Sales> {
    return this.customerRepository.sales(id).create(sales);
  }

  @patch('/customers/{id}/sales', {
    responses: {
      '200': {
        description: 'Customer.Sales PATCH success count',
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
    return this.customerRepository.sales(id).patch(sales, where);
  }

  @del('/customers/{id}/sales', {
    responses: {
      '200': {
        description: 'Customer.Sales DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Sales)) where?: Where<Sales>,
  ): Promise<Count> {
    return this.customerRepository.sales(id).delete(where);
  }
}
