// In real applications, you should not transpile code in the browser.
// You can see how to create your own application with Angular and DevExtreme here:
// https://js.devexpress.com/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/

var components = [ 
  'accordion',
  'action-sheet',
  'autocomplete',
  'bar-gauge',
  'box',
  'bullet',
  'button-group',
  'button',
  'calendar',
  'chart',
  'check-box',
  'circular-gauge',
  'color-box',
  'context-menu',
  'data-grid',
  'date-box',
  'date-range-box',
  'defer-rendering',
  'diagram',
  'draggable',
  'drawer',
  'drop-down-box',
  'drop-down-button',
  'file-manager',
  'file-uploader',
  'filter-builder',
  'form',
  'funnel',
  'gallery',
  'gantt',
  'html-editor',
  'linear-gauge',
  'list',
  'load-indicator',
  'load-panel',
  'lookup',
  'map',
  'menu',
  'multi-view',
  'number-box',
  'pie-chart',
  'pivot-grid-field-chooser',
  'pivot-grid',
  'polar-chart',
  'popover',
  'popup',
  'progress-bar',
  'radio-group',
  'range-selector',
  'range-slider',
  'recurrence-editor',
  'resizable',
  'responsive-box',
  'sankey',
  'scheduler',
  'scroll-view',
  'select-box',
  'slider',
  'sortable',
  'sparkline',
  'speed-dial-action',
  'switch',
  'tab-panel',
  'tabs',
  'tag-box',
  'text-area',
  'text-box',
  'tile-view',
  'toast',
  'toolbar',
  'tooltip',
  'tree-list',
  'tree-map',
  'tree-view',
  'validation-group',
  'validation-summary',
  'validator',
  'vector-map'
];

var map = {
  'ts': 'npm:plugin-typescript/lib/plugin.js',
  'typescript': 'npm:typescript/lib/typescript.js',
  '@angular/compiler': 'npm:@angular/compiler/system/es2015/ivy/angular-compiler.min.js',
  '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/system/es2015/ivy/angular-platform-browser-dynamic.min.js',
  '@angular/core': 'npm:@angular/core/fesm2015/core.mjs',
  '@angular/common': 'npm:@angular/common/fesm2015/common.mjs',
  '@angular/common/http': 'npm:@angular/common/fesm2015/http.mjs',
  '@angular/platform-browser': 'npm:@angular/platform-browser/fesm2015/platform-browser.mjs',
  '@angular/platform-browser/animations': 'npm:@angular/platform-browser/fesm2015/animations.mjs',
  '@angular/forms': 'npm:@angular/forms/fesm2015/forms.mjs',
  'tslib': 'npm:tslib/tslib.js',
  'rxjs': 'npm:rxjs/dist/bundles/rxjs.umd.js',
  'rxjs/operators': 'npm:rxjs/dist/cjs/operators/index.js',

  /** signalr */
  '@aspnet/signalr': 'npm:@aspnet/signalr/dist/cjs/index.js',
  /**/

  /** devextreme-aspnet-data-nojquery */
  'devextreme-aspnet-data-nojquery': 'npm:devextreme-aspnet-data-nojquery/index.js',
  /**/

  /** showdown&turndown */
  'devextreme-showdown': 'npm:devextreme-showdown/dist/showdown.js',
  'turndown': 'npm:turndown/lib/turndown.browser.umd.js',
  /**/

  /** globalize */
  'globalize': 'npm:globalize/dist/globalize',
  'json': 'npm:systemjs-plugin-json/json.js',
  'cldr': 'npm:cldrjs/dist/cldr',
  /**/

  /** exceljs&file-saver */
  'exceljs': 'npm:exceljs/dist/exceljs.min.js',
  'file-saver-es': 'npm:file-saver-es/dist/FileSaver.min.js',
  /**/

  /** jspdf */
  'fflate': 'npm:fflate/esm/browser.js',
  'jspdf': 'npm:jspdf/dist/jspdf.umd.min.js',
  /**/

  /** jspdf&jspdf-autotable */
  'fflate': 'npm:fflate/esm/browser.js',
  'jspdf': 'npm:jspdf/dist/jspdf.umd.min.js',
  'jspdf-autotable': 'npm:jspdf-autotable/dist/jspdf.plugin.autotable.min.js',
  /**/

  /** devextreme-intl */
  'json': 'npm:systemjs-plugin-json/json.js',
  /**/

  /** canvg */
  'stackblur-canvas': 'npm:stackblur-canvas/dist/stackblur.min.js',
  'rgbcolor': 'npm:rgbcolor/index.js',
  'canvg': 'npm:canvg/dist/browser/canvg.min.js',
  /**/

  /** vectormap */
  'devextreme-dist/js/vectormap-data': 'npm:devextreme-dist/js/vectormap-data',
  /**/

  'rrule': 'npm:rrule/dist/es5/rrule.js',
  'luxon': 'npm:luxon/build/global/luxon.min.js',
  'es6-object-assign': 'npm:es6-object-assign',

  'devextreme': 'npm:devextreme/cjs',
  'devextreme/bundles/dx.all': 'npm:devextreme/bundles/dx.all.js',
  'jszip': 'npm:jszip/dist/jszip.min.js',
  'devextreme-quill': 'npm:devextreme-quill/dist/dx-quill.min.js',
  'devexpress-diagram': 'npm:devexpress-diagram',
  'devexpress-gantt': 'npm:devexpress-gantt',
  'devextreme-angular': 'npm:devextreme-angular/fesm2015/devextreme-angular.mjs',
  'devextreme-angular/core': 'npm:devextreme-angular/fesm2015/devextreme-angular-core.mjs',
  'devextreme-angular/ui/nested': 'npm:devextreme-angular/fesm2015/devextreme-angular-ui-nested.mjs',
  '@devextreme/runtime': 'npm:@devextreme/runtime',
  'inferno': 'npm:inferno/dist/inferno.min.js',
  'inferno-compat': 'npm:inferno-compat/dist/inferno-compat.min.js',
  'inferno-create-element': 'npm:inferno-create-element/dist/inferno-create-element.min.js',
  'inferno-dom': 'npm:inferno-dom/dist/inferno-dom.min.js',
  'inferno-hydrate': 'npm:inferno-hydrate/dist/inferno-hydrate.min.js',
  'inferno-clone-vnode': 'npm:inferno-clone-vnode/dist/inferno-clone-vnode.min.js',
  'inferno-create-class': 'npm:inferno-create-class/dist/inferno-create-class.min.js',
  'inferno-extras': 'npm:inferno-extras/dist/inferno-extras.min.js',

  // Prettier
  'prettier/standalone': 'npm:prettier/standalone.js',
  'prettier/parser-html': 'npm:prettier/parser-html.js',

  'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',

};

components.forEach(function(component) {
  map['devextreme-angular/ui/' + component] = 'npm:devextreme-angular/fesm2015/devextreme-angular-ui-' + component + '.mjs';
});

window.exports = window.exports || {};
window.config = {
  transpiler: 'plugin-babel',
  babelOptions: {
    es2015: false
  },
  typescriptOptions: {
    module: 'system',
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
  },
  meta: {
    'typescript': {
      'exports': 'ts',
    },

    "*.mjs": {
      "format": "esm"
    },

    "*.ts": {
      "loader": "ts"
    },

    /** devextreme-aspnet-data-nojquery */
    'devextreme-aspnet-data-nojquery': {
      'esModule': true,
    },
    /**/
    /** vectormap */
    'devextreme-dist/js/vectormap-data/*': {
      'esModule': true,
    },
    /**/
    'devextreme/time_zone_utils.js': {
      'esModule': true,
    },
    'devextreme/localization.js': {
      'esModule': true,
    },
    'devextreme/core/utils/common.js': {
      'esModule': true,
    },
    'devextreme/core/utils/deferred.js': {
      'esModule': true,
    },
    'devextreme/events/*': {
      'esModule': true,
    },
    /** exceljs&file-saver */
    'exceljs': {
      'esModule': true,
    },
    /**/
  },
  paths: {
    'npm:': '../../../../../node_modules/',
  },
  map: map,
  packages: {
    'app': {
      main: './app.component.ts',
      defaultExtension: 'ts',
    },
    'devextreme': {
      defaultExtension: 'js',
    },
    'devextreme/events/utils': {
      main: 'index',
    },
    'devextreme/events': {
      main: 'index',
    }/** globalize */,
    'globalize': {
      main: '../globalize.js',
      defaultExtension: 'js',
    },
    'cldr': {
      main: '../cldr.js',
      defaultExtension: 'js',
    }/**/,
    'es6-object-assign': {
      main: './index.js',
      defaultExtension: 'js',
    },
    'rxjs': {
      defaultExtension: 'js',
    },
    'rxjs/operators': {
      defaultExtension: 'js',
    },
  },
  packageConfigPaths: [
    'npm:@devextreme/*/package.json',
    'npm:@devextreme/runtime/inferno/package.json',
    'npm:rxjs/package.json',
    'npm:rxjs/operators/package.json',
    'npm:devexpress-diagram/package.json',
    'npm:devexpress-gantt/package.json',

    /** signalr */
    'npm:@aspnet/*/package.json',
    /**/
  ],
};

System.config(window.config);
