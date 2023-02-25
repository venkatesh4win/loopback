import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Tapioca, TapiocaRelations} from '../models';

export class TapiocaRepository extends DefaultCrudRepository<
  Tapioca,
  typeof Tapioca.prototype.id,
  TapiocaRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Tapioca, dataSource);
  }
}
