"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesSalesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiclesSalesController = class VehiclesSalesController {
    constructor(vehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }
    async find(id, filter) {
        return this.vehiclesRepository.sales(id).find(filter);
    }
    async create(id, sales) {
        return this.vehiclesRepository.sales(id).create(sales);
    }
    async patch(id, sales, where) {
        return this.vehiclesRepository.sales(id).patch(sales, where);
    }
    async delete(id, where) {
        return this.vehiclesRepository.sales(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/vehicles/{id}/sales', {
        responses: {
            '200': {
                description: 'Array of Vehicles has many Sales',
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
], VehiclesSalesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/vehicles/{id}/sales', {
        responses: {
            '200': {
                description: 'Vehicles model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sales) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sales, {
                    title: 'NewSalesInVehicles',
                    exclude: ['id'],
                    optional: ['vehiclesId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesSalesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vehicles/{id}/sales', {
        responses: {
            '200': {
                description: 'Vehicles.Sales PATCH success count',
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
], VehiclesSalesController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/vehicles/{id}/sales', {
        responses: {
            '200': {
                description: 'Vehicles.Sales DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Sales))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesSalesController.prototype, "delete", null);
VehiclesSalesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VehiclesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VehiclesRepository])
], VehiclesSalesController);
exports.VehiclesSalesController = VehiclesSalesController;
//# sourceMappingURL=vehicles-sales.controller.js.map