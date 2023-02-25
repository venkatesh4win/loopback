"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SalesController = class SalesController {
    constructor(salesRepository) {
        this.salesRepository = salesRepository;
    }
    async create(sales) {
        return this.salesRepository.create(sales);
    }
    async count(where) {
        return this.salesRepository.count(where);
    }
    async find(filter) {
        return this.salesRepository.find(filter);
    }
    async updateAll(sales, where) {
        return this.salesRepository.updateAll(sales, where);
    }
    async findById(id, filter) {
        return this.salesRepository.findById(id, filter);
    }
    async updateById(id, sales) {
        await this.salesRepository.updateById(id, sales);
    }
    async replaceById(id, sales) {
        await this.salesRepository.replaceById(id, sales);
    }
    async deleteById(id) {
        await this.salesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/sales'),
    (0, rest_1.response)(200, {
        description: 'Sales model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sales) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sales, {
                    title: 'NewSales',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sales/count'),
    (0, rest_1.response)(200, {
        description: 'Sales model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Sales)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sales'),
    (0, rest_1.response)(200, {
        description: 'Array of Sales model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Sales, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Sales)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sales'),
    (0, rest_1.response)(200, {
        description: 'Sales PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sales, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Sales)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Sales, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sales/{id}'),
    (0, rest_1.response)(200, {
        description: 'Sales model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sales, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Sales, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sales/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sales PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sales, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sales]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/sales/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sales PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sales]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sales/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sales DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SalesController.prototype, "deleteById", null);
SalesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SalesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SalesRepository])
], SalesController);
exports.SalesController = SalesController;
//# sourceMappingURL=sales.controller.js.map