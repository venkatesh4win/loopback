"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BrokerController = class BrokerController {
    constructor(brokerRepository) {
        this.brokerRepository = brokerRepository;
    }
    async create(broker) {
        return this.brokerRepository.create(broker);
    }
    async count(where) {
        return this.brokerRepository.count(where);
    }
    async find(filter) {
        return this.brokerRepository.find(filter);
    }
    async updateAll(broker, where) {
        return this.brokerRepository.updateAll(broker, where);
    }
    async findById(id, filter) {
        return this.brokerRepository.findById(id, filter);
    }
    async updateById(id, broker) {
        await this.brokerRepository.updateById(id, broker);
    }
    async replaceById(id, broker) {
        await this.brokerRepository.replaceById(id, broker);
    }
    async deleteById(id) {
        await this.brokerRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/brokers'),
    (0, rest_1.response)(200, {
        description: 'Broker model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Broker) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Broker, {
                    title: 'NewBroker',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/brokers/count'),
    (0, rest_1.response)(200, {
        description: 'Broker model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Broker)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/brokers'),
    (0, rest_1.response)(200, {
        description: 'Array of Broker model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Broker, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Broker)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/brokers'),
    (0, rest_1.response)(200, {
        description: 'Broker PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Broker, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Broker)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Broker, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/brokers/{id}'),
    (0, rest_1.response)(200, {
        description: 'Broker model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Broker, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Broker, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/brokers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Broker PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Broker, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Broker]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/brokers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Broker PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Broker]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/brokers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Broker DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerController.prototype, "deleteById", null);
BrokerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BrokerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BrokerRepository])
], BrokerController);
exports.BrokerController = BrokerController;
//# sourceMappingURL=broker.controller.js.map