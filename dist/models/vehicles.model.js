"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicles = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const sales_model_1 = require("./sales.model");
const tapioca_model_1 = require("./tapioca.model");
let Vehicles = class Vehicles extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "type", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "vehicle_no", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "ownership_type", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "created", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Vehicles.prototype, "modified", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => sales_model_1.Sales),
    tslib_1.__metadata("design:type", Array)
], Vehicles.prototype, "sales", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => tapioca_model_1.Tapioca),
    tslib_1.__metadata("design:type", Array)
], Vehicles.prototype, "tapiocas", void 0);
Vehicles = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Vehicles);
exports.Vehicles = Vehicles;
//# sourceMappingURL=vehicles.model.js.map