import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lte.content-header', 'Integration | Component | content header', {
  integration: true
});

test('it renders as block', function(assert) {
  this.render(hbs`
    {{#lte.content-header}}
      template block text
    {{/lte.content-header}}
  `);
  assert.equal(this.$('h1').text().trim(), 'template block text');
  assert.ok(this.$('section').hasClass('content-header'));
});
