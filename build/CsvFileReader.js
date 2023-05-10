"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// Step 1 (see Step 2 in MatchReader.ts)
class CsvFileReader {
    // data (output of the class):
    // [
    // [ '06/04/2019', 'Bournemouth', 'Burnley', '1', '3', 'A', 'M Atkinson' ], 
    // [ '06/04/2019', 'Huddersfield', 'Leicester', '1', '4', 'A', 'D Coote' ] 
    // ]
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row) => {
            return row.split(",");
        });
    }
}
exports.CsvFileReader = CsvFileReader;
