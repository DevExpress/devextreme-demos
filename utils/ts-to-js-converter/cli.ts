/* eslint-disable import/no-extraneous-dependencies */
import minimist from 'minimist';
import path from 'path';
import { glob } from 'glob';
import { consola } from 'consola';

import { converter } from './converter';

const performConversion = async () => {
  const logger = {
    warning: consola.warn,
    error: consola.error,
    debug: consola.debug,
    info: consola.info,
    start: consola.start,
    success: consola.success,
  };

  const args = minimist(process.argv.slice(2));

  const sourceDirs = args._ || [process.cwd()];
  const outDirPostfix = 'Js';

  const entries = (await Promise.all(
    sourceDirs.map(async (sourceDir) => {
      const sources = await glob(sourceDir);
      return sources.map((source) => ({
        source: path.resolve(process.cwd(), source),
        out: path.resolve(
          process.cwd(),
          path.resolve(process.cwd(), source),
          `../${path.basename(source)}${outDirPostfix}`,
        ),
      }));
    }),
  )).flat(1);

  await Promise.all(
    entries.map(async ({ source, out }) => {
      logger.start(`converting ${source}`);
      await converter(source, out, logger);
      logger.success(`${source} complete`);
    }),
  )
    // eslint-disable-next-line no-void
    .then(void 0)
    .catch((error) => {
      logger.error(error);
      process.exit(1);
    });
};

performConversion();
