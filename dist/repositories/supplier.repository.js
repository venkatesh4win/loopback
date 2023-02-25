"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SupplierRepository = class SupplierRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, procurementsRepositoryGetter) {
        super(models_1.Supplier, dataSource);
        this.procurementsRepositoryGetter = procurementsRepositoryGetter;
        this.procurements = this.createHasManyRepositoryFactoryFor('procurements', procurementsRepositoryGetter);
        this.registerInclusionResolver('procurements', this.procurements.inclusionResolver);
    }
};
SupplierRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongo')),
    tslib_1.__param(1, repository_1.repository.getter('ProcurementsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function])
], SupplierRepository);
exports.SupplierRepository = SupplierRepository;
//# sourceMappingURL=supplier.repository.js.map