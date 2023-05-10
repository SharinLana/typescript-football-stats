import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

// Step 9: create a class based on the Analyzer interface
// See step 10 in Summary.ts
export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {} // accepts a team name as a string

  // and uses the run method inherited from Analyzer
  run(matches: MatchData[]): string {
    let numberOfWins = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        numberOfWins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        numberOfWins++;
      }
    }

    return `Team ${this.teamName} won ${numberOfWins} games.`;
  }
}
