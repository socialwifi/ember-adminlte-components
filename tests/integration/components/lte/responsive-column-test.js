import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lte.responsive-column', 'Integration | Component | responsive column', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lte.responsive-column}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#lte.responsive-column}}
      template block text
    {{/lte.responsive-column}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});
