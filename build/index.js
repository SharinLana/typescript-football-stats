"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analysis/WinsAnalysis");
const ConsoleOutput_1 = require("./outputs/ConsoleOutput");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
const summary = Summary_1.Summary.fullReport("Man United"); // stop => open report.html
summary.buildAndPrintOutput(matchReader.matches); // for the html output
const summaryConsole = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleOutput_1.ConsoleOutput());
summaryConsole.buildAndPrintOutput(matchReader.matches); // for the console output
