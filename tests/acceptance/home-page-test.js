import { test } from 'qunit';
import moduleForAcceptance from 'volley-tools-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test("should link to federations page", function(assert) {
  visit('/');
  click('a:contains("Federations")');
  andThen(function() {
    assert.equal(currentURL(), '/federations', "should navigate to federations");
  });
});
