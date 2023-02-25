"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StaffController = class StaffController {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }
    async create(staff) {
        return this.staffRepository.create(staff);
    }
    async count(where) {
        return this.staffRepository.count(where);
    }
    async find(filter) {
        return this.staffRepository.find(filter);
    }
    async updateAll(staff, where) {
        return this.staffRepository.updateAll(staff, where);
    }
    async findById(id, filter) {
        return this.staffRepository.findById(id, filter);
    }
    async updateById(id, staff) {
        await this.staffRepository.updateById(id, staff);
    }
    async replaceById(id, staff) {
        await this.staffRepository.replaceById(id, staff);
    }
    async deleteById(id) {
        await this.staffRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/staff'),
    (0, rest_1.response)(200, {
        description: 'Staff model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Staff) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Staff, {
                    title: 'NewStaff',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/staff/count'),
    (0, rest_1.response)(200, {
        description: 'Staff model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Staff)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/staff'),
    (0, rest_1.response)(200, {
        description: 'Array of Staff model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Staff, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Staff)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/staff'),
    (0, rest_1.response)(200, {
        description: 'Staff PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Staff, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Staff)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Staff, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/staff/{id}'),
    (0, rest_1.response)(200, {
        description: 'Staff model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Staff, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Staff, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/staff/{id}'),
    (0, rest_1.response)(204, {
        description: 'Staff PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Staff, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Staff]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/staff/{id}'),
    (0, rest_1.response)(204, {
        description: 'Staff PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Staff]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/staff/{id}'),
    (0, rest_1.response)(204, {
        description: 'Staff DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StaffController.prototype, "deleteById", null);
StaffController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.StaffRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StaffRepository])
], StaffController);
exports.StaffController = StaffController;
//# sourceMappingURL=staff.controller.js.map