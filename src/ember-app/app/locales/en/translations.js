import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS22ДолжностиКуLForm from './forms/i-i-s-22-должности-ку-l';
import IIS22РасчетLForm from './forms/i-i-s-22-расчет-l';
import IIS22СотрудникиLForm from './forms/i-i-s-22-сотрудники-l';
import IIS22ДолжностиКуEForm from './forms/i-i-s-22-должности-ку-e';
import IIS22РасчетEForm from './forms/i-i-s-22-расчет-e';
import IIS22СотрудникиEForm from './forms/i-i-s-22-сотрудники-e';
import IIS22ДолжностиКуModel from './models/i-i-s-22-должности-ку';
import IIS22РасчетModel from './models/i-i-s-22-расчет';
import IIS22СотрудникиModel from './models/i-i-s-22-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-22-должности-ку': IIS22ДолжностиКуModel,
    'i-i-s-22-расчет': IIS22РасчетModel,
    'i-i-s-22-сотрудники': IIS22СотрудникиModel
  },

  'application-name': 'НОрм',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'НОрм',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'НОрм',
          title: 'НОрм'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        22: {
          caption: '22',
          title: '22',
          'i-i-s-22-расчет-l': {
            caption: 'Расчет',
            title: ''
          },
          'i-i-s-22-должности-ку-l': {
            caption: 'Должности ку',
            title: ''
          },
          'i-i-s-22-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-22-должности-ку-l': IIS22ДолжностиКуLForm,
    'i-i-s-22-расчет-l': IIS22РасчетLForm,
    'i-i-s-22-сотрудники-l': IIS22СотрудникиLForm,
    'i-i-s-22-должности-ку-e': IIS22ДолжностиКуEForm,
    'i-i-s-22-расчет-e': IIS22РасчетEForm,
    'i-i-s-22-сотрудники-e': IIS22СотрудникиEForm
  },

});

export default translations;
