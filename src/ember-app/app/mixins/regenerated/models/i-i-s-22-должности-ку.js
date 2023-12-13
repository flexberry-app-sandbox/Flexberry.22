import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяДол: DS.attr('string')
});

export let ValidationRules = {
  имяДол: {
    descriptionKey: 'models.i-i-s-22-должности-ку.validations.имяДол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиКуE', 'i-i-s-22-должности-ку', {
    имяДол: attr('Имя дол', { index: 0 })
  });

  modelClass.defineProjection('ДолжностиКуL', 'i-i-s-22-должности-ку', {
    имяДол: attr('Имя дол', { index: 0 })
  });
};
