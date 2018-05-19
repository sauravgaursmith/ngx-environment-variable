import config from './rollup.config.umd.js';
import {
    LIB_NAME,
    DIST_PATH
} from './config.js';
config.output.format = 'es';
config.output.file = DIST_PATH + LIB_NAME + '.esm.js';
export default config;
