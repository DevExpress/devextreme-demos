/* eslint-disable import/no-extraneous-dependencies */
const { series } = require('gulp');

const { copyCommonAspFiles } = require('./copy-common-asp-files');
const { copyMercurialAspFiles } = require('./copy-mercurial-asp-files');
const { copyMvcSharedResources } = require('../utils/copy-shared-resources/copy');

exports.mvc = series(
  copyCommonAspFiles,
  copyMercurialAspFiles,
  copyMvcSharedResources,
);
