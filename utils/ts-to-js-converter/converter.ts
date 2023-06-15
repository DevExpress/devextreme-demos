/* eslint-disable import/no-extraneous-dependencies */
import cps from 'child_process';
import path from 'path';
import globCb from 'glob';
import fs from 'fs';
import fse from 'fs-extra';
import { promisify } from 'util';
import partial from 'lodash.partial';

import { Logger, PathResolvers } from './types';

const readFile = promisify(fs.readFile);
const copy = promisify(fse.copy);
const emptyDir = promisify(fse.emptyDir);
const remove = promisify(fse.remove);
const writeFile = promisify(fs.writeFile);
const glob = promisify(globCb);
const exec = promisify(cps.exec);

const tsConfigFileName = 'converter.tsconfig.json';

const bundleAssets = [
  'static/**/*',
  './**/*.md',
  './**/*.vue',
  './**/*.css',
  './**/*.html',
];

const redundantAssets = ['*tsconfig*', 'types.js'];

const makeConfig = (
  resolve: PathResolvers,
  include: string[],
  exclude: string[],
  types: string[],
  module = 'ES2015',
) => ({
  include,
  exclude,
  compilerOptions: {
    outDir: resolve.out('./'),
    rootDir: resolve.source('./'),
    module,
    moduleResolution: 'node',
    esModuleInterop: false,
    sourceMap: false,
    jsx: 'react-native',
    allowJs: true,
    target: 'ES2018',
    lib: ['ES2018', 'dom'],
    types,
    noEmit: false,
    skipLibCheck: true,
    allowSyntheticDefaultImports: true,
  },
});

const pipeSource = async (
  resolve: PathResolvers,
  assets: string[],
  processor: (source: string, target: string) => Promise<void>,
): Promise<void> => {
  await assets.map(async (asset) => {
    const files = await glob(resolve.source(asset));
    await files.map(async (file) => {
      await processor(
        resolve.source(file),
        resolve.out(`.${file.substring(resolve.source('./').length)}`),
      );
    });
  });
};

const execTsc = async (directory: string, args: string): Promise<string> => new Promise((resolve, reject) => {
  cps.exec(`tsc ${args}`, (error, stdout, stderr) => {
    if (error != null) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject(`${error}\n${stderr}\n${stdout}`);
    }
    return resolve(stdout);
  });
});

const compile = async (resolve: PathResolvers, log: Logger) => {
  log.debug('compiling sources and unit tests');

  const tsconfigFile = resolve.out(tsConfigFileName);

  log.debug(`writing ${tsconfigFile}`);

  await writeFile(
    tsconfigFile,
    JSON.stringify(
      makeConfig(
        resolve,
        [resolve.source('./**/*')],
        [resolve.source('./test/e2e*'), resolve.source('./jest.config.ts')],
        ['node', 'jest'],
      ),
      null,
      2,
    ),
  );

  await execTsc(resolve.source('./'), `--build ${tsconfigFile}`);
};

const copyAssets = async (resolve: PathResolvers, log: Logger) => {
  log.debug('copying assets:');
  await pipeSource(resolve, bundleAssets, async (source, target) => {
    log.debug(`${source} -> ${target}`);
    await copy(source, target);
  });
};

const strip = async (resolve: PathResolvers, log: Logger) => {
  log.debug('stripping JS example');

  await redundantAssets.map(async (asset) => {
    const files = await glob(resolve.out(asset));
    await files.map(async (file) => {
      log.debug(`! ${file}`);
      await remove(file);
    });
  });
};

const patchImports = async (resolve: PathResolvers, log: Logger) => {
  const filenamePatterns = ['./*.jsx?', './**/*.html'];

  const replaceFileExtensions = (input) => input
    .replace(/(\.tsx?)/g, '.js')
    .replace(/(\.tsx?)/g, '.js');

  await Promise.all(
    filenamePatterns.map(async (pattern) => {
      const files = await glob(resolve.out(pattern));
      return Promise.all(
        files.map(async (file) => {
          log.debug(`patching ${file}`);
          const fileContents = replaceFileExtensions(
            (await readFile(file)).toString(),
          );
          return writeFile(file, fileContents);
        }),
      );
    }),
  );
  log.debug('imports patching done');
};

const prettify = async (resolve: PathResolvers, log: Logger) => {
  log.debug('running Prettier');
  await exec(`prettier --write "${resolve.out('')}"`, {
    cwd: resolve.out(''),
  });
  await exec(`eslint --fix "${resolve.out('')}"`, {
    cwd: resolve.out(''),
  });
};

export const converter = async (
  sourceDir: string,
  outDir: string,
  log: Logger,
): Promise<void> => {
  log.debug('TS to JS example converter starting');
  log.debug(`sourceDir: ${sourceDir}`);
  log.debug(`outDir: ${outDir}`);

  const resolve = {
    source: partial(path.resolve, sourceDir),
    out: partial(path.resolve, outDir),
  };

  log.debug(`touching ${outDir}`);

  await emptyDir(outDir);

  await compile(resolve, log);
  await copyAssets(resolve, log);
  await patchImports(resolve, log);
  await strip(resolve, log);
  await prettify(resolve, log);
};
