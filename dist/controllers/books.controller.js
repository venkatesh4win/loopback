"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
// import {
//   post,
//   param,
//   get,
//   getModelSchemaRef,
//   patch,
//   put,
//   del,
//   requestBody,
//   response,
// } from '@loopback/rest';
// import {Books} from '../models';
const repositories_1 = require("../repositories");
let BooksController = class BooksController {
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
};
BooksController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BooksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BooksRepository])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map