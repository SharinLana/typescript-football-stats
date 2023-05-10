import { Output } from "../Summary";

export class ConsoleOutput implements Output  {
  print(report: string): void {
    console.log(report);
  }
}