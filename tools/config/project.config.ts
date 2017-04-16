import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Fart-one monitor';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    /* Add ngx-mqtt */
    this.addPackageBundles({
      name:'ngx-mqtt',
      path:'node_modules/ngx-mqtt/bundles/ngx-mqtt.min.js',
      packageMeta:{
        main: 'index.js',
        defaultExtension: 'js'
      }
    });

    /* Add moment */
    this.addPackageBundles({
      name: 'moment',
      path: `node_modules/moment/moment.js`
    });

    /* Add angualr moment */
    this.addPackageBundles({
      name: 'angular2-moment',
      packageMeta: {
        main: './index.js',
        defaultExtension: 'js'
      }
    });

    /* Add ngx-bootstrap */
    this.addPackageBundles({
      name: 'ngx-bootstrap',
      path: `node_modules/ngx-bootstrap`,
      packageMeta: {
        main: 'bundles/ngx-bootstrap.umd.min.js',
        defaultExtension: 'js'
      }
    });

    /* Enable SCSS for project */
    this.ENABLE_SCSS = true;


    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
