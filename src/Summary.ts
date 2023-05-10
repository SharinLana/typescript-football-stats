import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { HtmlOutput } from "./outputs/HTMLOutput";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Output {
  print(report: string): void;
}

export class Summary {
  // To call directly from Summary class, without creating a new instance
  static fullReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlOutput());
  }

  constructor(public analyzer: Analyzer, public output: Output) {}

  buildAndPrintOutput(matches: MatchData[]): void {
    const result = this.analyzer.run(matches);
    this.output.print(result);
  }
}

// new Summary(analyzer: WinsAnalysis('bcvxcx'), output: ConsoleReport())
// Summary.fullReport('bcvxcx')
