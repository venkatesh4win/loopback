"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let BrokerRepository = class BrokerRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, tapiocaRepositoryGetter) {
        super(models_1.Broker, dataSource);
        this.tapiocaRepositoryGetter = tapiocaRepositoryGetter;
        this.tapiocas = this.createHasManyRepositoryFactoryFor('tapiocas', tapiocaRepositoryGetter);
        this.registerInclusionResolver('tapiocas', this.tapiocas.inclusionResolver);
    }
};
BrokerRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongo')),
    tslib_1.__param(1, repository_1.repository.getter('TapiocaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function])
], BrokerRepository);
exports.BrokerRepository = BrokerRepository;
//# sourceMappingURL=broker.repository.js.map