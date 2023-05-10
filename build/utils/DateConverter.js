"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateConverter = void 0;
const dateConverter = (date) => {
    const dateParts = date.split("/").map((part) => {
        return parseInt(part);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateConverter = dateConverter;
