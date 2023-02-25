import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Supplier, SupplierRelations, Procurements} from '../models';
import {ProcurementsRepository} from './procurements.repository';

export class SupplierRepository extends DefaultCrudRepository<
  Supplier,
  typeof Supplier.prototype.id,
  SupplierRelations
> {

  public readonly procurements: HasManyRepositoryFactory<Procurements, typeof Supplier.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('ProcurementsRepository') protected procurementsRepositoryGetter: Getter<ProcurementsRepository>,
  ) {
    super(Supplier, dataSource);
    this.procurements = this.createHasManyRepositoryFactoryFor('procurements', procurementsRepositoryGetter,);
    this.registerInclusionResolver('procurements', this.procurements.inclusionResolver);
  }
}
