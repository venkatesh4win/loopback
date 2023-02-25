"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const sales_model_1 = require("./sales.model");
const inventory_model_1 = require("./inventory.model");
const procurements_model_1 = require("./procurements.model");
let Products = class Products extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "hsn", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "food_safety", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "tax", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "unit", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "created", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "modified", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => sales_model_1.Sales),
    tslib_1.__metadata("design:type", Array)
], Products.prototype, "sales", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => inventory_model_1.Inventory),
    tslib_1.__metadata("design:type", Array)
], Products.prototype, "inventories", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => procurements_model_1.Procurements),
    tslib_1.__metadata("design:type", Array)
], Products.prototype, "procurements", void 0);
Products = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Products);
exports.Products = Products;
//# sourceMappingURL=products.model.js.map