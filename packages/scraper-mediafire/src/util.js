"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFileSize = void 0;
/**
 * @returns as a kilobit
 */
function parseFileSize(size) {
    return parseFloat(size) * (/GB/i.test(size)
        ? 1000000
        : /MB/i.test(size)
            ? 1000
            : /KB/i.test(size)
                ? 1
                : /bytes?/i.test(size)
                    ? 0.001
                    : /B/i.test(size)
                        ? 0.1
                        : 0);
}
exports.parseFileSize = parseFileSize;
