import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { ConsoleOutput } from "./outputs/ConsoleOutput";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.fullReport("Man United"); // stop the app => run: open report.html
summary.buildAndPrintOutput(matchReader.matches); // for the html output

const summaryConsole = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleOutput()
);
summaryConsole.buildAndPrintOutput(matchReader.matches); // for the console output

