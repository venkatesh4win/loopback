import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Products, ProductsRelations, Sales, Inventory, Procurements} from '../models';
import {SalesRepository} from './sales.repository';
import {InventoryRepository} from './inventory.repository';
import {ProcurementsRepository} from './procurements.repository';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id,
  ProductsRelations
> {

  public readonly sales: HasManyRepositoryFactory<Sales, typeof Products.prototype.id>;

  public readonly inventories: HasManyRepositoryFactory<Inventory, typeof Products.prototype.id>;

  public readonly procurements: HasManyRepositoryFactory<Procurements, typeof Products.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('SalesRepository') protected salesRepositoryGetter: Getter<SalesRepository>, @repository.getter('InventoryRepository') protected inventoryRepositoryGetter: Getter<InventoryRepository>, @repository.getter('ProcurementsRepository') protected procurementsRepositoryGetter: Getter<ProcurementsRepository>,
  ) {
    super(Products, dataSource);
    this.procurements = this.createHasManyRepositoryFactoryFor('procurements', procurementsRepositoryGetter,);
    this.registerInclusionResolver('procurements', this.procurements.inclusionResolver);
    this.inventories = this.createHasManyRepositoryFactoryFor('inventories', inventoryRepositoryGetter,);
    this.registerInclusionResolver('inventories', this.inventories.inclusionResolver);
    this.sales = this.createHasManyRepositoryFactoryFor('sales', salesRepositoryGetter,);
    this.registerInclusionResolver('sales', this.sales.inclusionResolver);
  }
}
