# ngx-environment-variable

### Angular x script to set environment variables like Node Js environment variables

* `Angular` (Using "ngx-environment-variable"): ngxEnv.ENVIRONMENT_VARIABLE
* `Node`: process.env.ENVIRONMENT_VARIABLE

### installation

```txt
npm install ngx-environment-variable OR yarn add ngx-environment-variable
```

### How to use ?

1.  Put declaration in `src/typings.d.ts`

```ts
declare var ngxEnv;
```

2.  Delete `environment` import statement and put following piece of code above the `AppModule` import statement in `src/main.ts`:

```ts
import setNgxEnv from 'ngx-environment-variable';
import { environment } from './environments/environment';
setNgxEnv(environment, { origin: 'http://localhost:4200' });
```

3.  Use `ngxEnv` to environemt variables defined in `environment.ts` inside component, directive, pipe and module class.

```ts
export class AppComponent {
  title = ngxEnv.FACEBOOK_APP_ID;
  ngOnInit() {
    console.log(ngxEnv.FACEBOOK_APP_ID);
    console.log(ngxEnv.production);
  }
}
```

### `setNgxEnv(environment, options)` options parameters:

| Option     | Detail                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| origin     | value provided here is matched with current `window` origin. If it does not match `ngxEnv.<ENV_VAR>` will return `undefined` for all environment variables.                                                                                                  |
| envVarName | value provided here will rename `ngxEnv`. Environment variable can be used as `<envVarName>.<ENV_VAR>`.`Warning`: do not use any reserved keyword or any window object property. Do `NOT` forgot to change your declaration statement in `src/typings.d.ts`. |

#### Author

Saurav Singh

#### LICENSE

MIT
