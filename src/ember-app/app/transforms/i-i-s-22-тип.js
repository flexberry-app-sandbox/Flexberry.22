import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипEnum from '../enums/i-i-s-22-тип';

export default FlexberryEnum.extend({
  enum: ТипEnum,
  sourceType: 'IIS.22.Тип'
});
