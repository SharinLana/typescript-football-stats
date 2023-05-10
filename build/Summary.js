"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analysis/WinsAnalysis");
const HTMLOutput_1 = require("./outputs/HTMLOutput");
class Summary {
    // To call directly from Summary class, without creating a new instance
    static fullReport(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HTMLOutput_1.HtmlOutput());
    }
    constructor(analyzer, output) {
        this.analyzer = analyzer;
        this.output = output;
    }
    buildAndPrintOutput(matches) {
        const result = this.analyzer.run(matches);
        this.output.print(result);
    }
}
exports.Summary = Summary;
// new Summary(analyzer: WinsAnalysis('bcvxcx'), output: ConsoleReport())
// Summary.fullReport('bcvxcx')
