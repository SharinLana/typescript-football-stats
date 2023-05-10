import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = []; // result (array of arrays)

  constructor(public filename: string) {} // passed in value

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, "utf8")
      .split("\n")
      .map((line: string): string[] => line.split(","))
      .map(this.mapRow);
  }
}
