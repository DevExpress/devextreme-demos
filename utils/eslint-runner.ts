/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import { ESLint } from 'eslint';

const getPatterns = () => {
  const CONSTEL = process.env.CONSTEL;

  if (CONSTEL == null) {
    return ['JSDemos/Demos/**/*.[tj]s?(x)'];
  }

  const [current, total] = CONSTEL.split('/');

  const demos = fs.readdirSync(path.resolve(process.cwd(), 'JSDemos/Demos'));
  const filteredDemos = demos.filter((_, index) => index % +total === +current - 1);

  return filteredDemos.map((demoName) => `JSDemos/Demos/${demoName}/**/*.[tj]s?(x)`);
};

(async () => {
  const eslint = new ESLint({
    cwd: process.cwd(),
  });

  const patterns = getPatterns();
  const results = await eslint.lintFiles(patterns);

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  console.log(resultText);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
