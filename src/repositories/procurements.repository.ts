import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Procurements, ProcurementsRelations} from '../models';

export class ProcurementsRepository extends DefaultCrudRepository<
  Procurements,
  typeof Procurements.prototype.id,
  ProcurementsRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Procurements, dataSource);
  }
}
