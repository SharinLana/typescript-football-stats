"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analysis/WinsAnalysis");
const HTMLOutput_1 = require("./outputs/HTMLOutput");
// Step 13. See Step 14 below
class Summary {
    // Step 14.See Step 15 in index.ts
    // To call directly from Summary class, without creating a new instance
    static fullReport(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HTMLOutput_1.HtmlOutput());
    }
    constructor(analyzer, output) {
        this.analyzer = analyzer;
        this.output = output;
    }
    buildAndPrintOutput(matches) {
        const result = this.analyzer.run(matches); // getting the number of wins calculated in WinsAnalysis.ts
        this.output.print(result); // printing the result programmed in the class ConsoleOutput
    }
}
exports.Summary = Summary;
// const summary1 = new Summary(analyzer: WinsAnalysis('bcvxcx'), output: ConsoleReport())
// summary1.buildAndPrintOutput(matchReader.matches)
// Summary.fullReport('bcvxcx')
