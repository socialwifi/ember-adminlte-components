import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lte.help-tooltip', 'Integration | Component | help tooltip', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lte.help-tooltip}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it ignores block content', function(assert) {
  this.render(hbs`
    {{#lte.help-tooltip}}
      template block text
    {{/lte.help-tooltip}}
  `);
  assert.equal(this.$().text().trim(), '');
});

test('it displays icon', function(assert) {
  this.render(hbs`{{lte.help-tooltip}}`);
  assert.ok(this.$('i').hasClass('fa-question-circle'), 'question icon expected');
});

test('it sets Bootstrap tooltip data', function(assert) {
  this.render(hbs`{{lte.help-tooltip}}`);
  assert.equal(this.$('i').attr('data-toggle'), 'tooltip');
});

test('it displays message', function(assert) {
  this.set('help-text', 'Testing, testing!');
  this.render(hbs`{{lte.help-tooltip message=help-text}}`);
  assert.equal(this.$('i').attr('title'), 'Testing, testing!');
});

test('it uses placement option', function(assert) {
  this.set('placement', 'bottom');
  this.render(hbs`{{lte.help-tooltip placement=placement}}`);
  assert.equal(this.$('i').attr('data-placement'), 'bottom');
});
