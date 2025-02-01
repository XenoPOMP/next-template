import * as cheerio from 'cheerio';
import { ElementType } from 'domelementtype';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const pathToHtml = path.join(process.cwd(), 'coverage/index.html');

(async () => {
  const content = await readFile(pathToHtml, {
    encoding: 'utf-8',
  });

  const $ = cheerio.load(content);

  const percents = $('body .wrapper .clearfix .fl span.strong')
    .toArray()
    .map(i => i.children[0])
    .filter(i => !!i)
    .filter(i => i.type === ElementType.Text)
    .map(i => i.data.toString())
    .map(i => i.trim().replace(/%/g, ''))
    .map(i => +i);

  const sum = percents.reduce((acc, next) => acc + next, 0);
  const length = percents.length;
  const avg = sum / length;
})();
