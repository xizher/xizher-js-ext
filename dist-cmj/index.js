"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_extension_1 = __importDefault(require("./extension/array.extension"));
const date_extension_1 = __importDefault(require("./extension/date.extension"));
const number_extension_1 = __importDefault(require("./extension/number.extension"));
const string_extension_1 = __importDefault(require("./extension/string.extension"));
function ext(_this) {
    if (_this instanceof Date) {
        return date_extension_1.default(_this);
    }
    if (typeof _this === 'string') {
        return string_extension_1.default(_this);
    }
    if (typeof _this === 'number') {
        return number_extension_1.default(_this);
    }
    if (Array.isArray(_this)) {
        return array_extension_1.default(_this);
    }
}
exports.default = ext;
