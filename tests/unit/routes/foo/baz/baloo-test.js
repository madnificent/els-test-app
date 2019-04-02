import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | foo/baz/baloo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:foo/baz/baloo');
    assert.ok(route);
  });
});
