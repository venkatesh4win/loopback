import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Broker, BrokerRelations, Tapioca} from '../models';
import {TapiocaRepository} from './tapioca.repository';

export class BrokerRepository extends DefaultCrudRepository<
  Broker,
  typeof Broker.prototype.id,
  BrokerRelations
> {

  public readonly tapiocas: HasManyRepositoryFactory<Tapioca, typeof Broker.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('TapiocaRepository') protected tapiocaRepositoryGetter: Getter<TapiocaRepository>,
  ) {
    super(Broker, dataSource);
    this.tapiocas = this.createHasManyRepositoryFactoryFor('tapiocas', tapiocaRepositoryGetter,);
    this.registerInclusionResolver('tapiocas', this.tapiocas.inclusionResolver);
  }
}
