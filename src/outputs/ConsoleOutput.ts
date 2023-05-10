import { Output } from "../Summary";

// Step 11. See Step 12 in outputs/HTMLOutput.ts
export class ConsoleOutput implements Output  {
  print(report: string): void {
    console.log(report);
  }
}