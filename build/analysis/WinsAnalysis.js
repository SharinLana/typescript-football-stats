"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
// Step 9: create a class based on the Analyzer interface
// See step 10 in Summary.ts
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    } // accepts a team name as a string
    // and uses the run method inherited from Analyzer
    run(matches) {
        let numberOfWins = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                numberOfWins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                numberOfWins++;
            }
        }
        return `Team ${this.teamName} won ${numberOfWins} games.`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
