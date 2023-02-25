"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcurementsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProcurementsController = class ProcurementsController {
    constructor(procurementsRepository) {
        this.procurementsRepository = procurementsRepository;
    }
    async create(procurements) {
        return this.procurementsRepository.create(procurements);
    }
    async count(where) {
        return this.procurementsRepository.count(where);
    }
    async find(filter) {
        return this.procurementsRepository.find(filter);
    }
    async updateAll(procurements, where) {
        return this.procurementsRepository.updateAll(procurements, where);
    }
    async findById(id, filter) {
        return this.procurementsRepository.findById(id, filter);
    }
    async updateById(id, procurements) {
        await this.procurementsRepository.updateById(id, procurements);
    }
    async replaceById(id, procurements) {
        await this.procurementsRepository.replaceById(id, procurements);
    }
    async deleteById(id) {
        await this.procurementsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/procurements'),
    (0, rest_1.response)(200, {
        description: 'Procurements model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements, {
                    title: 'NewProcurements',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/procurements/count'),
    (0, rest_1.response)(200, {
        description: 'Procurements model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Procurements)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/procurements'),
    (0, rest_1.response)(200, {
        description: 'Array of Procurements model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Procurements, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Procurements)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/procurements'),
    (0, rest_1.response)(200, {
        description: 'Procurements PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Procurements)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Procurements, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/procurements/{id}'),
    (0, rest_1.response)(200, {
        description: 'Procurements model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Procurements, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/procurements/{id}'),
    (0, rest_1.response)(204, {
        description: 'Procurements PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Procurements]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/procurements/{id}'),
    (0, rest_1.response)(204, {
        description: 'Procurements PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Procurements]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/procurements/{id}'),
    (0, rest_1.response)(204, {
        description: 'Procurements DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcurementsController.prototype, "deleteById", null);
ProcurementsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProcurementsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProcurementsRepository])
], ProcurementsController);
exports.ProcurementsController = ProcurementsController;
//# sourceMappingURL=procurements.controller.js.map