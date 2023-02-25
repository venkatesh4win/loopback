"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ExpenseController = class ExpenseController {
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    async create(expense) {
        return this.expenseRepository.create(expense);
    }
    async count(where) {
        return this.expenseRepository.count(where);
    }
    async find(filter) {
        return this.expenseRepository.find(filter);
    }
    async updateAll(expense, where) {
        return this.expenseRepository.updateAll(expense, where);
    }
    async findById(id, filter) {
        return this.expenseRepository.findById(id, filter);
    }
    async updateById(id, expense) {
        await this.expenseRepository.updateById(id, expense);
    }
    async replaceById(id, expense) {
        await this.expenseRepository.replaceById(id, expense);
    }
    async deleteById(id) {
        await this.expenseRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/expenses'),
    (0, rest_1.response)(200, {
        description: 'Expense model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Expense) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Expense, {
                    title: 'NewExpense',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/expenses/count'),
    (0, rest_1.response)(200, {
        description: 'Expense model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Expense)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/expenses'),
    (0, rest_1.response)(200, {
        description: 'Array of Expense model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Expense, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Expense)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/expenses'),
    (0, rest_1.response)(200, {
        description: 'Expense PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Expense, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Expense)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Expense, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/expenses/{id}'),
    (0, rest_1.response)(200, {
        description: 'Expense model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Expense, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Expense, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/expenses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Expense PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Expense, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Expense]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/expenses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Expense PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Expense]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/expenses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Expense DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseController.prototype, "deleteById", null);
ExpenseController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ExpenseRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ExpenseRepository])
], ExpenseController);
exports.ExpenseController = ExpenseController;
//# sourceMappingURL=expense.controller.js.map