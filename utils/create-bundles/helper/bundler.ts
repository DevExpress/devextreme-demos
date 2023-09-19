import { BuildOptions } from 'esbuild';
import { Demo, Framework } from './types';

export interface Bundler {
  framework: Framework;
  getBuildOptions(demo: Demo): BuildOptions;
  buildDemo(demo: Demo): Promise<void>;
}
