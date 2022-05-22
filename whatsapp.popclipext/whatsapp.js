"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = exports.whatsappUrl = void 0;
const libphonenumber_js_1 = __importDefault(require("./libphonenumber-js"));
function whatsappUrl(text) {
    const numbers = (0, libphonenumber_js_1.default)(text, 'SG');
    return "https://wa.me/" + (numbers === undefined ? "" : numbers.number.substring(1));
}
exports.whatsappUrl = whatsappUrl;
const action = (input) => {
    return whatsappUrl(input.text);
};
exports.action = action;
