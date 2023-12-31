import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-22-должности-ку', 'Unit | Model | i-i-s-22-должности-ку', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-22-должности-ку',
    'model:i-i-s-22-расчет',
    'model:i-i-s-22-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
