import {
  defineNamespace,
  defineProjections,
  Model as РасчетMixin
} from '../mixins/regenerated/models/i-i-s-22-расчет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
