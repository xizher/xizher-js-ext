"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extString = exports.extNumber = exports.extDate = exports.extArray = void 0;
const array_extension_1 = __importDefault(require("./extension/array.extension"));
exports.extArray = array_extension_1.default;
const date_extension_1 = __importDefault(require("./extension/date.extension"));
exports.extDate = date_extension_1.default;
const number_extension_1 = __importDefault(require("./extension/number.extension"));
exports.extNumber = number_extension_1.default;
const string_extension_1 = __importDefault(require("./extension/string.extension"));
exports.extString = string_extension_1.default;
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
