"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBooksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
let UserBooksController = class UserBooksController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
};
UserBooksController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserBooksController);
exports.UserBooksController = UserBooksController;
//# sourceMappingURL=user-books.controller.js.map