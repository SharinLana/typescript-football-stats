import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { HtmlOutput } from "./outputs/HTMLOutput";

// Step 8: create a blueprint (interface) for the function 
// that accepts MatchData tuple. See Step 9 in analysis/WinsAnalysis.ts
export interface Analyzer {
  run(matches: MatchData[]): string;
}

// Step 10. See Step 11 in outputs/ConsoleOutput.ts
export interface Output {
  print(report: string): void;
}

// Step 13. See Step 14 below
export class Summary {
  // Step 14. See Steps 15 and 16 in index.ts
  // To call directly from Summary class, without creating a new instance
  static fullReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlOutput());
  }

  constructor(public analyzer: Analyzer, public output: Output) {}

  buildAndPrintOutput(matches: MatchData[]): void {
    const result = this.analyzer.run(matches); // getting the number of wins calculated in WinsAnalysis.ts
    this.output.print(result); // printing the result programmed in the class ConsoleOutput
  }
}

// const summary1 = new Summary(analyzer: WinsAnalysis('bcvxcx'), output: ConsoleReport())
// summary1.buildAndPrintOutput(matchReader.matches)

// Summary.fullReport('bcvxcx')
