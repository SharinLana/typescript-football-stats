import { CsvFileReader } from "./CsvFileReader";
import { dateConverter } from "./utils/DateConverter";
import { MatchResult } from "./MatchResult";

// Output data tuple 
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row:string[]): MatchData {
    return [
      dateConverter(row[0]),
      row[1],
      row[2],
      Number(row[3]),
      Number(row[4]),
      row[5] as MatchResult, // "H", "A", or "D"
      row[6],
    ];
  }
}