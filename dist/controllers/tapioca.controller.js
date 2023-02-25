"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapiocaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TapiocaController = class TapiocaController {
    constructor(tapiocaRepository) {
        this.tapiocaRepository = tapiocaRepository;
    }
    async create(tapioca) {
        return this.tapiocaRepository.create(tapioca);
    }
    async count(where) {
        return this.tapiocaRepository.count(where);
    }
    async find(filter) {
        return this.tapiocaRepository.find(filter);
    }
    async updateAll(tapioca, where) {
        return this.tapiocaRepository.updateAll(tapioca, where);
    }
    async findById(id, filter) {
        return this.tapiocaRepository.findById(id, filter);
    }
    async updateById(id, tapioca) {
        await this.tapiocaRepository.updateById(id, tapioca);
    }
    async replaceById(id, tapioca) {
        await this.tapiocaRepository.replaceById(id, tapioca);
    }
    async deleteById(id) {
        await this.tapiocaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/tapiocas'),
    (0, rest_1.response)(200, {
        description: 'Tapioca model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca, {
                    title: 'NewTapioca',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tapiocas/count'),
    (0, rest_1.response)(200, {
        description: 'Tapioca model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Tapioca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tapiocas'),
    (0, rest_1.response)(200, {
        description: 'Array of Tapioca model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Tapioca, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Tapioca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tapiocas'),
    (0, rest_1.response)(200, {
        description: 'Tapioca PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Tapioca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tapioca, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tapiocas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Tapioca model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Tapioca, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tapiocas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tapioca PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tapioca]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/tapiocas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tapioca PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tapioca]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/tapiocas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tapioca DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TapiocaController.prototype, "deleteById", null);
TapiocaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TapiocaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TapiocaRepository])
], TapiocaController);
exports.TapiocaController = TapiocaController;
//# sourceMappingURL=tapioca.controller.js.map