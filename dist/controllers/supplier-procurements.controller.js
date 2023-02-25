"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierProcurementsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SupplierProcurementsController = class SupplierProcurementsController {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async find(id, filter) {
        return this.supplierRepository.procurements(id).find(filter);
    }
    async create(id, procurements) {
        return this.supplierRepository.procurements(id).create(procurements);
    }
    async patch(id, procurements, where) {
        return this.supplierRepository.procurements(id).patch(procurements, where);
    }
    async delete(id, where) {
        return this.supplierRepository.procurements(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/suppliers/{id}/procurements', {
        responses: {
            '200': {
                description: 'Array of Supplier has many Procurements',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Procurements) },
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
], SupplierProcurementsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/suppliers/{id}/procurements', {
        responses: {
            '200': {
                description: 'Supplier model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements, {
                    title: 'NewProcurementsInSupplier',
                    exclude: ['id'],
                    optional: ['supplierId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SupplierProcurementsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/suppliers/{id}/procurements', {
        responses: {
            '200': {
                description: 'Supplier.Procurements PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Procurements, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Procurements))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SupplierProcurementsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/suppliers/{id}/procurements', {
        responses: {
            '200': {
                description: 'Supplier.Procurements DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Procurements))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SupplierProcurementsController.prototype, "delete", null);
SupplierProcurementsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SupplierRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SupplierRepository])
], SupplierProcurementsController);
exports.SupplierProcurementsController = SupplierProcurementsController;
//# sourceMappingURL=supplier-procurements.controller.js.map