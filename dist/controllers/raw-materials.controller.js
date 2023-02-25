"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawMaterialsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RawMaterialsController = class RawMaterialsController {
    constructor(rawMaterialsRepository) {
        this.rawMaterialsRepository = rawMaterialsRepository;
    }
    async create(rawMaterials) {
        return this.rawMaterialsRepository.create(rawMaterials);
    }
    async count(where) {
        return this.rawMaterialsRepository.count(where);
    }
    async find(filter) {
        return this.rawMaterialsRepository.find(filter);
    }
    async updateAll(rawMaterials, where) {
        return this.rawMaterialsRepository.updateAll(rawMaterials, where);
    }
    async findById(id, filter) {
        return this.rawMaterialsRepository.findById(id, filter);
    }
    async updateById(id, rawMaterials) {
        await this.rawMaterialsRepository.updateById(id, rawMaterials);
    }
    async replaceById(id, rawMaterials) {
        await this.rawMaterialsRepository.replaceById(id, rawMaterials);
    }
    async deleteById(id) {
        await this.rawMaterialsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/raw-materials'),
    (0, rest_1.response)(200, {
        description: 'RawMaterials model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.RawMaterials) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RawMaterials, {
                    title: 'NewRawMaterials',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/raw-materials/count'),
    (0, rest_1.response)(200, {
        description: 'RawMaterials model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.RawMaterials)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/raw-materials'),
    (0, rest_1.response)(200, {
        description: 'Array of RawMaterials model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.RawMaterials, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.RawMaterials)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/raw-materials'),
    (0, rest_1.response)(200, {
        description: 'RawMaterials PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RawMaterials, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.RawMaterials)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.RawMaterials, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/raw-materials/{id}'),
    (0, rest_1.response)(200, {
        description: 'RawMaterials model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RawMaterials, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.RawMaterials, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/raw-materials/{id}'),
    (0, rest_1.response)(204, {
        description: 'RawMaterials PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RawMaterials, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.RawMaterials]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/raw-materials/{id}'),
    (0, rest_1.response)(204, {
        description: 'RawMaterials PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.RawMaterials]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/raw-materials/{id}'),
    (0, rest_1.response)(204, {
        description: 'RawMaterials DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RawMaterialsController.prototype, "deleteById", null);
RawMaterialsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RawMaterialsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RawMaterialsRepository])
], RawMaterialsController);
exports.RawMaterialsController = RawMaterialsController;
//# sourceMappingURL=raw-materials.controller.js.map