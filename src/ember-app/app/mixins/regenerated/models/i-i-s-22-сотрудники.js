import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  должностиКу: DS.belongsTo('i-i-s-22-должности-ку', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-22-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должностиКу: {
    descriptionKey: 'models.i-i-s-22-сотрудники.validations.должностиКу.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-22-сотрудники', {
    имя: attr('Имя', { index: 0 }),
    должностиКу: belongsTo('i-i-s-22-должности-ку', 'Должности ку', {
      имяДол: attr('Должность', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имяДол' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-22-сотрудники', {
    имя: attr('Имя', { index: 0 }),
    должностиКу: belongsTo('i-i-s-22-должности-ку', 'Должность', {
      имяДол: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
