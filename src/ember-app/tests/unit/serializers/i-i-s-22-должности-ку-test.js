import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-22-должности-ку', 'Unit | Serializer | i-i-s-22-должности-ку', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-22-должности-ку',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-22-тип',

    'model:i-i-s-22-должности-ку',
    'model:i-i-s-22-расчет',
    'model:i-i-s-22-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
