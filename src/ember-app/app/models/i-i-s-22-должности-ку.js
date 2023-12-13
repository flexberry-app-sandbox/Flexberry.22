import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДолжностиКуMixin
} from '../mixins/regenerated/models/i-i-s-22-должности-ку';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДолжностиКуMixin, Validations, {
});

defineProjections(Model);

export default Model;
