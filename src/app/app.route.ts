'use strict';

var homeComponent = require('structure/home/home.component');
var CookbookComponent = require('components/cookbook/cookbook.component');
var foodsComponent = require('components/foods/foods.component');

exports.routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: homeComponent
  },
  {
    path: 'foods',
    component: foodsComponent
  },
];
