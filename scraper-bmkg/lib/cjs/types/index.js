"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsunamiSchema = exports.earthQuakeRealtimeSchema = exports.earthQuakeNowSchema = exports.earthQuakeSchema = exports.earthQuakeBaseSchema = void 0;
const zod_1 = require("zod");
exports.earthQuakeBaseSchema = zod_1.z.object({
    date: zod_1.z.string(),
    time: zod_1.z.string(),
    latitude: zod_1.z.string(),
    longitude: zod_1.z.string(),
    magnitude: zod_1.z.string(),
    depth: zod_1.z.string()
});
exports.earthQuakeSchema = zod_1.z.object({
    location: zod_1.z.string(),
    warning: zod_1.z.array(zod_1.z.string())
}).merge(exports.earthQuakeBaseSchema);
exports.earthQuakeNowSchema = zod_1.z.object({
    location: zod_1.z.string(),
}).merge(exports.earthQuakeBaseSchema);
exports.earthQuakeRealtimeSchema = zod_1.z.object({
    location: zod_1.z.array(zod_1.z.string()),
    isConfirmed: zod_1.z.boolean()
}).merge(exports.earthQuakeBaseSchema);
exports.TsunamiSchema = zod_1.z.object({
    location: zod_1.z.string(),
    info: zod_1.z.string()
}).merge(exports.earthQuakeBaseSchema);
