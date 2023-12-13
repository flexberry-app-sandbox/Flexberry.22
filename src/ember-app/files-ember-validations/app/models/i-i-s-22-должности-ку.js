import {
  defineNamespace,
  defineProjections,
  Model as ДолжностиКуMixin
} from '../mixins/regenerated/models/i-i-s-22-должности-ку';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностиКуMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
