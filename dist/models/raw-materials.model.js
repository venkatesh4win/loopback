"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawMaterials = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let RawMaterials = class RawMaterials extends repository_1.Entity {
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
], RawMaterials.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], RawMaterials.prototype, "tapioca_type", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], RawMaterials.prototype, "decription", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], RawMaterials.prototype, "created", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], RawMaterials.prototype, "modified", void 0);
RawMaterials = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], RawMaterials);
exports.RawMaterials = RawMaterials;
//# sourceMappingURL=raw-materials.model.js.map