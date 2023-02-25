"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InventoryController = class InventoryController {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async create(inventory) {
        return this.inventoryRepository.create(inventory);
    }
    async count(where) {
        return this.inventoryRepository.count(where);
    }
    async find(filter) {
        return this.inventoryRepository.find(filter);
    }
    async updateAll(inventory, where) {
        return this.inventoryRepository.updateAll(inventory, where);
    }
    async findById(id, filter) {
        return this.inventoryRepository.findById(id, filter);
    }
    async updateById(id, inventory) {
        await this.inventoryRepository.updateById(id, inventory);
    }
    async replaceById(id, inventory) {
        await this.inventoryRepository.replaceById(id, inventory);
    }
    async deleteById(id) {
        await this.inventoryRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/inventories'),
    (0, rest_1.response)(200, {
        description: 'Inventory model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory, {
                    title: 'NewInventory',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inventories/count'),
    (0, rest_1.response)(200, {
        description: 'Inventory model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Inventory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inventories'),
    (0, rest_1.response)(200, {
        description: 'Array of Inventory model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Inventory, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Inventory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inventories'),
    (0, rest_1.response)(200, {
        description: 'Inventory PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Inventory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Inventory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inventories/{id}'),
    (0, rest_1.response)(200, {
        description: 'Inventory model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Inventory, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inventories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inventory PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventory, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Inventory]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/inventories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inventory PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Inventory]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/inventories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inventory DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryController.prototype, "deleteById", null);
InventoryController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InventoryRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InventoryRepository])
], InventoryController);
exports.InventoryController = InventoryController;
//# sourceMappingURL=inventory.controller.js.map