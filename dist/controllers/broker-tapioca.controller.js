"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerTapiocaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BrokerTapiocaController = class BrokerTapiocaController {
    constructor(brokerRepository) {
        this.brokerRepository = brokerRepository;
    }
    async find(id, filter) {
        return this.brokerRepository.tapiocas(id).find(filter);
    }
    async create(id, tapioca) {
        return this.brokerRepository.tapiocas(id).create(tapioca);
    }
    async patch(id, tapioca, where) {
        return this.brokerRepository.tapiocas(id).patch(tapioca, where);
    }
    async delete(id, where) {
        return this.brokerRepository.tapiocas(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/brokers/{id}/tapiocas', {
        responses: {
            '200': {
                description: 'Array of Broker has many Tapioca',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Tapioca) },
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
], BrokerTapiocaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/brokers/{id}/tapiocas', {
        responses: {
            '200': {
                description: 'Broker model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca, {
                    title: 'NewTapiocaInBroker',
                    exclude: ['id'],
                    optional: ['brokerId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerTapiocaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/brokers/{id}/tapiocas', {
        responses: {
            '200': {
                description: 'Broker.Tapioca PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tapioca, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Tapioca))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerTapiocaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/brokers/{id}/tapiocas', {
        responses: {
            '200': {
                description: 'Broker.Tapioca DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Tapioca))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrokerTapiocaController.prototype, "delete", null);
BrokerTapiocaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BrokerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BrokerRepository])
], BrokerTapiocaController);
exports.BrokerTapiocaController = BrokerTapiocaController;
//# sourceMappingURL=broker-tapioca.controller.js.map