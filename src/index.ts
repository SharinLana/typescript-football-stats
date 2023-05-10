import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { ConsoleOutput } from "./outputs/ConsoleOutput";

// Step 7 (then it's time to tailor the output: see Step 8 in Summary.ts)
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// Step 15: Getting the number of wins for the team and printing it as an HTML file
const summary = Summary.fullReport("Man United"); // stop the app => run: open report.html
summary.buildAndPrintOutput(matchReader.matches); // for the html output ("matches" is the output of the MatchReader class)

// Step 16: Logging the number of wins to the console
const summaryConsole = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleOutput()
);
summaryConsole.buildAndPrintOutput(matchReader.matches); // for the console output
