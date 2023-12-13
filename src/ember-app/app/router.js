import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-22-должности-ку-l');
  this.route('i-i-s-22-должности-ку-e',
  { path: 'i-i-s-22-должности-ку-e/:id' });
  this.route('i-i-s-22-должности-ку-e.new',
  { path: 'i-i-s-22-должности-ку-e/new' });
  this.route('i-i-s-22-расчет-l');
  this.route('i-i-s-22-расчет-e',
  { path: 'i-i-s-22-расчет-e/:id' });
  this.route('i-i-s-22-расчет-e.new',
  { path: 'i-i-s-22-расчет-e/new' });
  this.route('i-i-s-22-сотрудники-l');
  this.route('i-i-s-22-сотрудники-e',
  { path: 'i-i-s-22-сотрудники-e/:id' });
  this.route('i-i-s-22-сотрудники-e.new',
  { path: 'i-i-s-22-сотрудники-e/new' });
});

export default Router;
