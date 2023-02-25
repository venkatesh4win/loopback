import {
  repository
} from '@loopback/repository';
import {UserRepository} from '../repositories';

export class UserBooksController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  // @get('/users/{id}/books', {
  //   responses: {
  //     '200': {
  //       description: 'Array of User has many Books',
  //       content: {
  //         'application/json': {
  //           schema: {type: 'array', items: getModelSchemaRef(Books)},
  //         },
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.path.string('id') id: string,
  //   @param.query.object('filter') filter?: Filter<Books>,
  // ): Promise<Books[]> {
  //   return this.userRepository.books(id).find(filter);
  // }

  // @post('/users/{id}/books', {
  //   responses: {
  //     '200': {
  //       description: 'User model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(Books)}},
  //     },
  //   },
  // })
  // async create(
  //   @param.path.string('id') id: typeof User.prototype.id,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Books, {
  //           title: 'NewBooksInUser',
  //           exclude: ['id'],
  //           optional: ['userId']
  //         }),
  //       },
  //     },
  //   }) books: Omit<Books, 'id'>,
  // ): Promise<Books> {
  //   return this.userRepository.books(id).create(books);
  // }

  // @patch('/users/{id}/books', {
  //   responses: {
  //     '200': {
  //       description: 'User.Books PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async patch(
  //   @param.path.string('id') id: string,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Books, {partial: true}),
  //       },
  //     },
  //   })
  //   books: Partial<Books>,
  //   @param.query.object('where', getWhereSchemaFor(Books)) where?: Where<Books>,
  // ): Promise<Count> {
  //   return this.userRepository.books(id).patch(books, where);
  // }

  // @del('/users/{id}/books', {
  //   responses: {
  //     '200': {
  //       description: 'User.Books DELETE success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async delete(
  //   @param.path.string('id') id: string,
  //   @param.query.object('where', getWhereSchemaFor(Books)) where?: Where<Books>,
  // ): Promise<Count> {
  //   return this.userRepository.books(id).delete(where);
  // }
}
