"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInventoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductsInventoryController = class ProductsInventoryController {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async find(id, filter) {
        return this.productsRepository.inventories(id).find(filter);
    }
    async create(id, inventory) {
        return this.productsRepository.inventories(id).create(inventory);
    }
    async patch(id, inventory, where) {
        return this.productsRepository.inventories(id).patch(inventory, where);
    }
    async delete(id, where) {
        return this.productsRepository.inventories(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Array of Products has many Inventory',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inventory) },
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
], ProductsInventoryController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Products model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory, {
                    title: 'NewInventoryInProducts',
                    exclude: ['id'],
                    optional: ['productsId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsInventoryController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Products.Inventory PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inventory))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsInventoryController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Products.Inventory DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inventory))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsInventoryController.prototype, "delete", null);
ProductsInventoryController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductsRepository])
], ProductsInventoryController);
exports.ProductsInventoryController = ProductsInventoryController;
//# sourceMappingURL=products-inventory.controller.js.map