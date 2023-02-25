"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSalesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductsSalesController = class ProductsSalesController {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async find(id, filter) {
        return this.productsRepository.sales(id).find(filter);
    }
    async create(id, sales) {
        return this.productsRepository.sales(id).create(sales);
    }
    async patch(id, sales, where) {
        return this.productsRepository.sales(id).patch(sales, where);
    }
    async delete(id, where) {
        return this.productsRepository.sales(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/products/{id}/sales', {
        responses: {
            '200': {
                description: 'Array of Products has many Sales',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Sales) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsSalesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/products/{id}/sales', {
        responses: {
            '200': {
                description: 'Products model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sales) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sales, {
                    title: 'NewSalesInProducts',
                    exclude: ['id'],
                    optional: ['productsId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsSalesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/products/{id}/sales', {
        responses: {
            '200': {
                description: 'Products.Sales PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sales, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Sales))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsSalesController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/products/{id}/sales', {
        responses: {
            '200': {
                description: 'Products.Sales DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Sales))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsSalesController.prototype, "delete", null);
ProductsSalesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductsRepository])
], ProductsSalesController);
exports.ProductsSalesController = ProductsSalesController;
//# sourceMappingURL=products-sales.controller.js.map