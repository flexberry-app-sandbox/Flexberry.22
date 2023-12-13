import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.22.caption'),
          title: i18n.t('forms.application.sitemap.22.title'),
          children: [{
            link: 'i-i-s-22-расчет-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-расчет-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-расчет-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-22-должности-ку-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-должности-ку-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-должности-ку-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-22-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-сотрудники-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})