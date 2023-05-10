import { MatchResult } from "./MatchResult";

// Step 4: tuple for the output types (see Step 5 in MatchReader.ts)
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
