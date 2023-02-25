"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProductsRepository = class ProductsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, salesRepositoryGetter, inventoryRepositoryGetter, procurementsRepositoryGetter) {
        super(models_1.Products, dataSource);
        this.salesRepositoryGetter = salesRepositoryGetter;
        this.inventoryRepositoryGetter = inventoryRepositoryGetter;
        this.procurementsRepositoryGetter = procurementsRepositoryGetter;
        this.procurements = this.createHasManyRepositoryFactoryFor('procurements', procurementsRepositoryGetter);
        this.registerInclusionResolver('procurements', this.procurements.inclusionResolver);
        this.inventories = this.createHasManyRepositoryFactoryFor('inventories', inventoryRepositoryGetter);
        this.registerInclusionResolver('inventories', this.inventories.inclusionResolver);
        this.sales = this.createHasManyRepositoryFactoryFor('sales', salesRepositoryGetter);
        this.registerInclusionResolver('sales', this.sales.inclusionResolver);
    }
};
ProductsRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongo')),
    tslib_1.__param(1, repository_1.repository.getter('SalesRepository')),
    tslib_1.__param(2, repository_1.repository.getter('InventoryRepository')),
    tslib_1.__param(3, repository_1.repository.getter('ProcurementsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function, Function, Function])
], ProductsRepository);
exports.ProductsRepository = ProductsRepository;
//# sourceMappingURL=products.repository.js.map