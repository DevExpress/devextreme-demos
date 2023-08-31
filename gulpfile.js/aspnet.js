/* eslint-disable import/no-extraneous-dependencies */
const { series } = require('gulp');

const { copyCommonAspFiles } = require('./copy-common-asp-files');
const { copyAspFiles } = require('./copy-asp-files');
const { copyMvcSharedResources } = require('../utils/copy-shared-resources/copy');

exports.aspnet = series(
  copyAspFiles,
  copyCommonAspFiles,
  copyMvcSharedResources,
);
