import fs from "fs";

// Step 1 (see Step 2 in MatchReader.ts)
export class CsvFileReader {
  data: string[][] = [];
  // data (output of the class):
  // [
  // [ '06/04/2019', 'Bournemouth', 'Burnley', '1', '3', 'A', 'M Atkinson' ], 
  // [ '06/04/2019', 'Huddersfield', 'Leicester', '1', '4', 'A', 'D Coote' ] 
  // ]

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
