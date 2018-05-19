import NgxEnvOptions from './interface';
import ngxEnvOptions from './options';

const proxyHandler = {
  options: ngxEnvOptions,
  get: function(target, key) {
    return this.options.origin === window.location.origin
      ? target[key]
      : undefined;
  },
  set: function(target, key, value) {
    return true;
  },
  deleteProperty: function() {
    return true;
  }
};

function setNgxEnv(env: any, options: NgxEnvOptions) {
  // set origin
  if (options && options.origin) {
    proxyHandler.options.origin = options.origin;
  }
  if (env && typeof env === 'object' && !Array.isArray(env)) {
    // Set NgxEnv
    const tempNgxEnv = {};
    // create temporary environment object.
    for (let key in env) {
      const isObject = typeof env[key] === 'object' && !Array.isArray(env[key]);
      tempNgxEnv[key] = isObject ? Object.freeze(env[key]) : env[key];
    }

    // define environment variable name
    const envVarName =
      options && options.envVarName
        ? options.envVarName
        : ngxEnvOptions.envVarName;

    // create and proxy environment property in window object.
    Object.defineProperty(window, envVarName, {
      value: new Proxy(tempNgxEnv, proxyHandler),
      writable: false,
      configurable: false,
      enumerable: true
    });
  } else {
    throw new Error('NgxEnv : invalid environment');
  }
}

export default setNgxEnv;
