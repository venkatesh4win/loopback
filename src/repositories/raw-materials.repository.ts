import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {RawMaterials, RawMaterialsRelations} from '../models';

export class RawMaterialsRepository extends DefaultCrudRepository<
  RawMaterials,
  typeof RawMaterials.prototype.id,
  RawMaterialsRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(RawMaterials, dataSource);
  }
}
