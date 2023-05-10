import { dateConverter } from "./utils/DateConverter";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

// Step 2 (see Step 3 in MatchResult.ts)
interface DataReader {
  read(): void;
  data: string[][];
}

// Step 5
export class MatchReader {
  // Step 6: to call the result right from the class (see Step 7 in index.ts)
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateConverter(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
