'use strict';

var recepiesComponent = require('components/recepies/recepies.component');
var recepiesDetailComponent = require('components/recepies/recepies-detail/recepies-detail.component');
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
    path: 'recepies',
    component: recepiesComponent
  },
  {
    path: 'recepies/:id',
    component: recepiesDetailComponent
  },
  {
    path: 'foods',
    component: foodsComponent
  },
];
