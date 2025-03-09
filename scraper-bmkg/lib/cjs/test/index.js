"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const index_js_1 = require("../index.js");
(0, node_test_1.describe)('BMKG', () => {
    (0, node_test_1.describe)('Sismo', () => {
        (0, node_test_1.it)('Sensacion de Sismo', async () => {
            const data = await (0, index_js_1.earthQuake)();
            node_assert_1.default.ok(data.length > 1);
        });
        (0, node_test_1.it)('El ultimo Sismo (M ≥ 5.0)', async () => {
            const data = await (0, index_js_1.earthQuakeNow)();
            node_assert_1.default.ok(data.length > 1);
        });
        (0, node_test_1.it)('Sismo en tiempo real', async () => {
            const data = await (0, index_js_1.earthQuakeRealtime)();
            node_assert_1.default.ok(data.length > 1);
        });
    });
    (0, node_test_1.it)('Tsunami', async () => {
        const data = await (0, index_js_1.tsunami)();
        node_assert_1.default.ok(data.length > 1);
    });
});
