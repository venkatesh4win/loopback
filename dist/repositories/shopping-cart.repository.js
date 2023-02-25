"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartRepository = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const repository_1 = require("@loopback/repository");
const util_1 = require("util");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const retry_1 = require("../utils/retry");
let ShoppingCartRepository = class ShoppingCartRepository extends repository_1.DefaultKeyValueRepository {
    constructor(dataSource) {
        super(models_1.ShoppingCart, dataSource);
    }
    /**
     * Add an item to the shopping cart with optimistic lock to allow concurrent
     * `adding to cart` from multiple devices. If race condition happens, it will
     * try 10 times at an interval of 10 ms. Timeout will be reported as an error.
     *
     * @param userId User id
     * @param item Item to be added
     * @returns A promise that's resolved with the updated ShoppingCart instance
     *
     */
    addItem(userId, item) {
        const task = {
            run: async () => {
                const addItemToCart = (cart) => {
                    var _a;
                    cart = cart !== null && cart !== void 0 ? cart : new models_1.ShoppingCart({ userId });
                    cart.items = (_a = cart.items) !== null && _a !== void 0 ? _a : [];
                    cart.items.push(item);
                    return cart;
                };
                const result = await this.checkAndSet(userId, addItemToCart);
                return {
                    done: result != null,
                    value: result,
                };
            },
            description: `update the shopping cart for '${userId}'`,
        };
        return (0, retry_1.retry)(task, { maxTries: 10, interval: 10 });
    }
    /**
     * Use Redis WATCH and Transaction to check and set against a key
     * See https://redis.io/topics/transactions#optimistic-locking-using-check-and-set
     *
     * Ideally, this method should be made available by `KeyValueRepository`.
     *
     * @param userId User id
     * @param check A function that checks the current value and produces a new
     * value. It returns `null` to abort.
     *
     * @returns A promise that's resolved with the updated ShoppingCart instance
     * or with null if the transaction failed due to a race condition.
     * See https://github.com/NodeRedis/node_redis#optimistic-locks
     */
    async checkAndSet(userId, check) {
        const connector = this.kvModelClass.dataSource.connector;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const execute = (0, util_1.promisify)((cmd, args, cb) => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connector.execute(cmd, args, cb);
        });
        /**
         * - WATCH userId
         * - GET userId
         * - check(cart)
         * - MULTI
         * - SET userId
         * - EXEC
         */
        await execute('WATCH', [userId]);
        let cart = await this.get(userId);
        cart = check(cart);
        if (!cart)
            return null;
        await execute('MULTI', []);
        await this.set(userId, cart);
        const result = await execute('EXEC', []);
        return result == null ? null : cart;
    }
};
ShoppingCartRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, context_1.inject)('datasources.mongo')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource])
], ShoppingCartRepository);
exports.ShoppingCartRepository = ShoppingCartRepository;
//# sourceMappingURL=shopping-cart.repository.js.map