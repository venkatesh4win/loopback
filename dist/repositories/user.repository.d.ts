import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { Order, User, UserCredentials, Books } from '../models';
import { OrderRepository } from './order.repository';
import { UserCredentialsRepository } from './user-credentials.repository';
import { BooksRepository } from './books.repository';
export type Credentials = {
    email: string;
    password: string;
};
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    protected orderRepository: OrderRepository;
    protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>;
    protected booksRepositoryGetter: Getter<BooksRepository>;
    orders: HasManyRepositoryFactory<Order, typeof User.prototype.id>;
    readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    readonly books: HasManyRepositoryFactory<Books, typeof User.prototype.id>;
    constructor(dataSource: juggler.DataSource, orderRepository: OrderRepository, userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>, booksRepositoryGetter: Getter<BooksRepository>);
    findCredentials(userId: typeof User.prototype.id): Promise<UserCredentials | undefined>;
}
