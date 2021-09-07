/* eslint-env node */
/* eslint-disable quote-props */

// eslint-disable-next-line import/no-extraneous-dependencies
const spellcheckRule = require('eslint-config-devextreme/spell-check').rules['spellcheck/spell-checker'];

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    'ecmaVersion': 2018,
  },
  plugins: [
    'spellcheck',
  ],
  rules: {
    'spellcheck/spell-checker': (() => {
      Array.prototype.push.apply(spellcheckRule[1].skipWords, [
        'acc', // DXHotelsNetApi\Client\views\currentHotel.js ?
        'accessor',
        'adaptivity',
        'adrs',
        'africa',
        'ajax',
        'antialiasing',
        'api',
        'ar', // arabic
        'arabic',
        'arg',
        'argb', // ExcelJS
        'args',
        'asia',
        'assignee',
        'assignees',
        'async',
        'attr',
        'attrs',
        'aug',
        'autocomplete',
        'backorder',
        'backordered', // DevAV NetCore
        'bing',
        'bkg',
        'bool',
        'bg', // ExcelJS
        'br', // <br> tag in html
        'Cldr',
        'canada',
        'ceil',
        'checkbox',
        'cityid',
        'cluster',
        'cnstl',
        'colorizer',
        'comparer',
        'concat',
        'coord',
        'coords',
        'cordova',
        'cpu',
        'crosshair',
        'ctrl',
        'datebox',
        'de',
        'ru',
        'democase',
        'democases',
        'desc',
        'dest', // gulp
        'dev', // DevAV
        'devexpress',
        'devextremeaddon',
        'dialogs',
        'docurl',
        'draggable',
        'dropzone',
        'dto',
        'dx',
        'dxkey', // for React templates
        'emp',
        'evt',
        'english',
        'etalon',
        'etalons',
        'eurasia',
        'europe',
        'european',
        'exe',
        'expr',
        'fav',
        'faved',
        'femalemiddle',
        'femaleolder',
        'femaleyoung',
        'filename', // DXHotelsNetApi\Client\views\booking.js from db
        'fitted',
        'fg', // ExcelJS
        'formatter',
        'func',
        'gantt',
        'gdp', // gross domestic product
        'geolocation',
        'getter',
        'getters',
        'globals',
        'mapGetters',
        'gif',
        'goto',
        'guid',
        'holydays',
        'hotelid',
        'href',
        'html',
        'http',
        'https',
        'ie',
        'iframe',
        'img',
        'init',
        'inited',
        'ity', // DXHotelsNetApi\Client\views\home.js  CIty_Image from db
        'Fmt', // ExcelJS
        'jan',
        'js',
        'jspdf',
        'jszip',
        'jsonp',
        'jsserver',
        'jul',
        'july',
        'jun',
        'june',
        'Kanban',
        'lang',
        'latinamerica',
        'len',
        'li',
        'lng',
        'loc',
        'lookups',
        'longtabs',
        'malemiddle',
        'maleolder',
        'maleyoung',
        'maximumfractiondigits',
        'metadata',
        'mmp',
        'monday',
        'msg',
        'multiline',
        'mvc',
        'na', // NaN
        'namespace',
        'nav',
        'nbsp',
        'nd',
        'nighly', // DXHotelsNetApi\Client\views\booking.js from db
        'noop',
        'northamerica',
        'num',
        'objs',
        'occured',
        'oceania',
        'ok',
        'olympic',
        'onclick',
        'onhashchange',
        'onreadystatechange',
        'orderby',
        'pageview',
        'pangaea',
        'param',
        'params',
        'perc',
        'perf',
        'pdf',
        'pivotgrid',
        'png', // DataGrid CustomEditors for image format
        'popup',
        'popups',
        'pos',
        'postfix',
        'prec',
        'pregrouped',
        'prepend',
        'prev',
        'rangebar',
        'readdir', // node js
        'realtor',
        'rect',
        'req',
        'resellers',
        'resize',
        'resizing',
        'roomid',
        'rowspan',
        'rtl',
        'sankey',
        'sclass', // CSSClass
        'scrollable',
        'scrollbar',
        'setted',
        'skype',
        'smp',
        'sonee',
        'sortable',
        'sparkline',
        'splashscreen',
        'splinearea',
        'sqlite',
        'sqrt',
        'src',
        'stacktrace',
        'startswith',
        'steparea',
        'stepline',
        'str',
        'stringify',
        'strikethrough',
        'submenu',
        'substr',
        'substring',
        'subvalue',
        'subvalues',
        'svg',
        'swfobject',
        'tbody',
        'th',
        'td',
        'theatre',
        'timestamp',
        'tmp',
        'tooltip',
        'tooltips',
        'transpile',
        'transpiler',
        'treeview',
        'ui', // User Interface
        'ul',
        'ungrouped',
        'unlink',
        'unordered',
        'unselect', // unselectAll()
        'unshift',
        'uploader',
        'uri',
        'urlencoded',
        'usa',
        'util',
        'utils',
        'validator',
        'viewport',
        'volumne', // stockMarket, rename to volume
        'vue',
        'winloss',
        'writeable', // knockout
        'xlsx', // ExcelJS
        'xhr',
        'Xmla',
        'xmla',
        'youtube',
        'ytd',
        'zipcode',
        'Serializer', // XMLSerializer
        // VectorMap Demos
        'Kosovo',
        'Macau',
        'Niue',
        'Palau',
      ]);
      return spellcheckRule;
    })(),
    'class-methods-use-this': 0, // TODO warn (was error)
    'func-names': 0, // TODO warn (was warn)
    'import/extensions': 0, // TODO does not work if remove extension (was error)
    'no-use-before-define': 0, // TODO warn (was error)
    'no-var': 0, // TODO error (was error)
    'vars-on-top': 0, // TODO error (was error)
    'no-unused-expressions': 0, // TODO error (was error)
    'no-plusplus': 0, // TODO error (was error)
    'no-param-reassign': 0, // TODO error (was error)
    'no-return-assign': 0, // TODO error (was error)
    'no-multi-assign': 0, // TODO error (was error)
    'max-len': 0, // TODO error (was error)
    'no-shadow': 0, // TODO error (was error)
    'prefer-destructuring': 0, // TODO error (was error)
    'default-case': 0, // TODO error (was error)
    'no-sequences': 0, // TODO error (was error)
    'consistent-return': 0, // TODO error (was error)
    'no-throw-literal': 0, // TODO error (was error)
    'prefer-const': 0, // TODO error (was error)
    'no-mixed-operators': 0, // TODO error (was error)
    'radix': 0, // TODO error (was error)
    'no-void': 0, // TODO error (was error)
    'prefer-rest-params': 0, // TODO error (was error)
    'prefer-spread': 0, // TODO error (was error)
    'no-useless-constructor': 0, // TODO error (was error)
    'import/order': 0, // TODO error (was error)
    'import/no-webpack-loader-syntax': 0,
    'import/no-unresolved': 0,
  },
  extends: [
    'eslint:recommended',
    'devextreme/javascript',
    'devextreme/spell-check',
  ],
  overrides: [{
    files: [
      '**/test-code.js',
      '**/client-script.js',
    ],
    globals: {
      DevExpress: true,
      testUtils: true,
      MockDate: true,
    },
  }, {
    files: [
      'JSDemos/Demos/**/jQuery/*.*',
      'JSDemos/Demos/**/AngularJS/*.*',
      'JSDemos/Demos/**/Knockout/*.*',
    ],
    env: {
      jquery: true,
    },
    globals: {
      DevExpress: true,
    },
    overrides: [{
      files: '**/data.js',
      rules: {
        'no-unused-vars': 0,
      },
    }, {
      files: '**/index.js',
      rules: {
        'no-undef': 0,
      },
    }],
  }, {
    files: 'JSDemos/Demos/**/React/*.*',
    parser: 'babel-eslint',
    extends: [
      'plugin:react/recommended',
    ],
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        'pragma': 'React',
        version: '16.2',
        flowVersion: '0.53',
      },
      propWrapperFunctions: [
        'forbidExtraProps',
      ],
    },
    rules: {
      'block-spacing': 'error',
      'comma-spacing': 'error',
      'computed-property-spacing': 'error',
      'comma-style': ['error', 'last'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-irregular-whitespace': 'error',
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'no-new-func': 'error',
      'no-eval': 'error',
      'no-undef': 'error',
      'no-unused-expressions': 'off',
      'no-unused-vars': ['error'],
      'no-extend-native': 'error',
      'no-alert': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': ['error', 'always'],
      'semi-spacing': 'error',
      semi: 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'eol-last': ['error', 'always'],
      curly: ['error', 'multi-line', 'consistent'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          MemberExpression: 1,
          CallExpression: {
            arguments: 1,
          },
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prefer-template': 'error',
      'func-style': ['error', 'declaration'],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'react/jsx-fragments': ['error', 'element'],
      'react/jsx-no-bind': [
        'error',
        {
          allowBind: true, // TODO false (was false)
          allowArrowFunctions: true, // TODO false (was false)
          ignoreRefs: true,
        },
      ],
      'react/jsx-tag-spacing': [
        'error',
        {
          beforeClosing: 'never',
        },
      ],
      'react/jsx-no-undef': [
        'error',
        {
          allowGlobals: true,
        },
      ],
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': [
        'error',
        {
          enforceDynamicLinks: 'never',
        },
      ],
    },
  }, {
    files: ['JSDemos/Demos/**/Vue/*.vue', 'JSDemos/Demos/**/Vue/*.js'],
    extends: [
      'plugin:vue/recommended',
    ],
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
    rules: {
      'block-spacing': 'error',
      'comma-spacing': 'error',
      'computed-property-spacing': 'error',
      'comma-style': ['error', 'last'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-irregular-whitespace': 'error',
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'no-new-func': 'error',
      'no-eval': 'error',
      'no-undef': 'error',
      'no-unused-expressions': 'off',
      'no-unused-vars': ['error'],
      'no-extend-native': 'error',
      'no-alert': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': ['error', 'always'],
      'semi-spacing': 'error',
      semi: 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'eol-last': ['error', 'always'],
      curly: ['error', 'multi-line', 'consistent'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          MemberExpression: 1,
          CallExpression: {
            arguments: 1,
          },
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prefer-template': 'error',
      'vue/camelcase': 'error',
      'vue/component-name-in-template-casing': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/attributes-order': 'off',
      'vue/no-unused-vars': 'off',
      'vue/no-unused-components': 'off',
      'vue/no-template-shadow': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/valid-v-model': 'off',
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      }],
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        multiline: 'always',
      }],
    },
  }, {
    files: ['**/UpdateBarGaugeDataAtRuntime/**/*.*'],
    rules: {
      'no-bitwise': 0,
    },
  }],
};
