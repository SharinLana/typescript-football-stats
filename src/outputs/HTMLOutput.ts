import fs from "fs";
import { Output } from "../Summary";

// Step 12. See Step 13 in Summary.ts
export class HtmlOutput implements Output {
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    `;

    fs.writeFileSync("report.html", html, { encoding: "utf8" });
  }
}
