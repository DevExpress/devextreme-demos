/* eslint-disable import/no-extraneous-dependencies */
const { series } = require('gulp');
const yargs = require('yargs');

const { copyCommonAspFiles } = require('./copy-common-asp-files');
const { copyAspFiles, buildAndCopyAspFiles } = require('./copy-asp-files');
const { copyMvcSharedResources } = require('../utils/copy-shared-resources/copy');

const argv = yargs
  .boolean('release')
  .argv;

exports.aspnet = series(
  argv.release ? copyAspFiles : buildAndCopyAspFiles,
  copyCommonAspFiles,
  copyMvcSharedResources,
);
