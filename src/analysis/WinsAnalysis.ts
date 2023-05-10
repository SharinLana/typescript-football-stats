import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

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
