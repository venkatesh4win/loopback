"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiclesController = class VehiclesController {
    constructor(vehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }
    async create(vehicles) {
        return this.vehiclesRepository.create(vehicles);
    }
    async count(where) {
        return this.vehiclesRepository.count(where);
    }
    async find(filter) {
        return this.vehiclesRepository.find(filter);
    }
    async updateAll(vehicles, where) {
        return this.vehiclesRepository.updateAll(vehicles, where);
    }
    async findById(id, filter) {
        return this.vehiclesRepository.findById(id, filter);
    }
    async updateById(id, vehicles) {
        await this.vehiclesRepository.updateById(id, vehicles);
    }
    async replaceById(id, vehicles) {
        await this.vehiclesRepository.replaceById(id, vehicles);
    }
    async deleteById(id) {
        await this.vehiclesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/vehicles'),
    (0, rest_1.response)(200, {
        description: 'Vehicles model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicles) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicles, {
                    title: 'NewVehicles',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehicles/count'),
    (0, rest_1.response)(200, {
        description: 'Vehicles model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Vehicles)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehicles'),
    (0, rest_1.response)(200, {
        description: 'Array of Vehicles model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vehicles, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Vehicles)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vehicles'),
    (0, rest_1.response)(200, {
        description: 'Vehicles PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicles, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Vehicles)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Vehicles, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehicles/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vehicles model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicles, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Vehicles, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vehicles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehicles PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicles, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vehicles]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/vehicles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehicles PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vehicles]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/vehicles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehicles DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiclesController.prototype, "deleteById", null);
VehiclesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VehiclesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VehiclesRepository])
], VehiclesController);
exports.VehiclesController = VehiclesController;
//# sourceMappingURL=vehicles.controller.js.map