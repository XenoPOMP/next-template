import * as cheerio from 'cheerio';
import { ElementType } from 'domelementtype';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const pathToHtml = path.join(process.cwd(), 'coverage/index.html');
const pathToReadme = path.join(process.cwd(), 'README.md');

const getAvgCoverage = async () => {
  const htmlContent = await readFile(pathToHtml, {
    encoding: 'utf-8',
  });

  const $ = cheerio.load(htmlContent);

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
  return sum / length;
};

const writeToReadme = async (avg: number) => {
  const readmeContent = await readFile(pathToReadme, {
    encoding: 'utf-8',
  });

  let color: string = '';

  if (avg === 100) {
    color = 'darkgreen';
  }

  if (avg < 100) {
    color = '#05e01e';
  }

  if (avg < 90) {
    color = '#ffa600';
  }

  if (avg < 50) {
    color = '#f00';
  }

  // Normalize color
  color = color.replace(/#/g, '');

  const regex =
    /<img alt="Coverage status" src="https:\/\/img\.shields\.io\/badge.*>/g;
  const replaced = readmeContent.replace(
    regex,
    `<img alt="Coverage status" src="https://img.shields.io/badge/coverage-${avg.toFixed(0)}%25-${color}">`,
  );

  await writeFile(pathToReadme, replaced);
};

(async () => {
  const avg = await getAvgCoverage();
  await writeToReadme(avg);
})();
