"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let VehiclesRepository = class VehiclesRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, salesRepositoryGetter, tapiocaRepositoryGetter) {
        super(models_1.Vehicles, dataSource);
        this.salesRepositoryGetter = salesRepositoryGetter;
        this.tapiocaRepositoryGetter = tapiocaRepositoryGetter;
        this.tapiocas = this.createHasManyRepositoryFactoryFor('tapiocas', tapiocaRepositoryGetter);
        this.registerInclusionResolver('tapiocas', this.tapiocas.inclusionResolver);
        this.sales = this.createHasManyRepositoryFactoryFor('sales', salesRepositoryGetter);
        this.registerInclusionResolver('sales', this.sales.inclusionResolver);
    }
};
VehiclesRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongo')),
    tslib_1.__param(1, repository_1.repository.getter('SalesRepository')),
    tslib_1.__param(2, repository_1.repository.getter('TapiocaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function, Function])
], VehiclesRepository);
exports.VehiclesRepository = VehiclesRepository;
//# sourceMappingURL=vehicles.repository.js.map