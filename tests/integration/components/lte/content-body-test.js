import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lte.content-body', 'Integration | Component | content body', {
  integration: true
});

test('it renders as block', function(assert) {
  this.render(hbs`
    {{#lte.content-body}}
      template block text
    {{/lte.content-body}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
  assert.ok(this.$('section').hasClass('content'));
});
