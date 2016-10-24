import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';

/**
* app Module
*
* Application Main Module
*/
angular.module('app', []).component('appComponent', appComponent);
