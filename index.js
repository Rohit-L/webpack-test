const lodash = import('lodash');

import(/* webpackChunkName: "[request].locale" */
`./locales/${window.Globals.locale}`).then(({ default: localeMap }) => {
  console.log(localeMap);
});
