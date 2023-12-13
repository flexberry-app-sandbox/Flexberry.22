import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'НОрм',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'НОрм',
          title: '22'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
