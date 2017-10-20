import FontAwesomeIcon from 'ember-font-awesome/components/fa-icon';

export default FontAwesomeIcon.extend({
  icon: 'question-circle',
  placement: null,
  _dataToggle: 'tooltip',
  attributeBindings: [
    'message:title',
    '_dataToggle:data-toggle',
    'placement:data-placement'
  ]
});
