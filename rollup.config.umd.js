import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

import {
    LIB_NAME,
    SRC_PATH,
    DIST_PATH
} from './config.js';
export default {
    input: SRC_PATH + LIB_NAME + '.ts',
    output: {
        name: LIB_NAME,
        format: 'umd',
        file: DIST_PATH + LIB_NAME + '.umd.js',
        sourcemap: true
    },
    plugins: [
        typescript({
            typescript: require('typescript')
        }),
        resolve({
            module: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**'
        })
    ],
    onwarn: warning => {
        const skip_codes = ['THIS_IS_UNDEFINED', 'MISSING_GLOBAL_NAME'];
        if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
};
