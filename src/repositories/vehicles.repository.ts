import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Vehicles, VehiclesRelations, Sales, Tapioca} from '../models';
import {SalesRepository} from './sales.repository';
import {TapiocaRepository} from './tapioca.repository';

export class VehiclesRepository extends DefaultCrudRepository<
  Vehicles,
  typeof Vehicles.prototype.id,
  VehiclesRelations
> {

  public readonly sales: HasManyRepositoryFactory<Sales, typeof Vehicles.prototype.id>;

  public readonly tapiocas: HasManyRepositoryFactory<Tapioca, typeof Vehicles.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('SalesRepository') protected salesRepositoryGetter: Getter<SalesRepository>, @repository.getter('TapiocaRepository') protected tapiocaRepositoryGetter: Getter<TapiocaRepository>,
  ) {
    super(Vehicles, dataSource);
    this.tapiocas = this.createHasManyRepositoryFactoryFor('tapiocas', tapiocaRepositoryGetter,);
    this.registerInclusionResolver('tapiocas', this.tapiocas.inclusionResolver);
    this.sales = this.createHasManyRepositoryFactoryFor('sales', salesRepositoryGetter,);
    this.registerInclusionResolver('sales', this.sales.inclusionResolver);
  }
}
