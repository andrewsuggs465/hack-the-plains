// Lists unwritten copy ("COPY:"), TBD values, and empty links in src/.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const hits = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
      if (/^\s*(#|\/\/)/.test(line) || line.includes("startsWith('COPY:')")) return;
      if (/COPY:|\bTBD\b|:\s*""\s*(#.*)?$/.test(line)) hits.push(`${p}:${i + 1}  ${line.trim()}`);
    });
  }
};
walk('src');
console.log(hits.join('\n') || 'Nothing left to fill in.');
console.log(`\n${hits.length} to fill in`);
