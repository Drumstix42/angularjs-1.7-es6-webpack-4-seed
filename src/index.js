const angular = require('angular');
import registerDirectives from './directives';

import style from './assets/scss/main.scss';

if ( TEST_MODE ) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

registerDirectives(ngModule);
// require('./directives').default(ngModule);

export { ngModule };