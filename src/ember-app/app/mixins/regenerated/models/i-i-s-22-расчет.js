import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  тип: DS.attr('i-i-s-22-тип'),
  сотрудники: DS.belongsTo('i-i-s-22-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-22-расчет.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-22-расчет.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-22-расчет.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетE', 'i-i-s-22-расчет', {
    код: attr('Код', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    сотрудники: belongsTo('i-i-s-22-сотрудники', 'Сотрудники', {
      имя: attr('Имя', { index: 3, hidden: true }),
      должностиКу: belongsTo('i-i-s-22-должности-ку', '', {
        имяДол: attr('Должность', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('РасчетL', 'i-i-s-22-расчет', {
    код: attr('Код', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    сотрудники: belongsTo('i-i-s-22-сотрудники', 'Имя', {
      имя: attr('Имя', { index: 2 }),
      должностиКу: belongsTo('i-i-s-22-должности-ку', '', {
        имяДол: attr('Должность', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
