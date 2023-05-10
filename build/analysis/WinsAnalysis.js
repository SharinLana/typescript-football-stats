"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
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
