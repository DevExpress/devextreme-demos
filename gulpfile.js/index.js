'use strict';

const { series } = require('gulp');

const { copyCommonAspFiles } = require('./copy-common-asp-files');
const { copyMercurialAspFiles } = require('./copy-mercurial-asp-files');

exports.mvc = series(copyCommonAspFiles, copyMercurialAspFiles);
