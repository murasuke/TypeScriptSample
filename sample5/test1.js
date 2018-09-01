"use strict";
QUnit.module("Test Suite 1");
QUnit.test("Test A", function (assert) {
    assert.ok(true, "This Shouldnt fail");
});
QUnit.test("Test B", function (assert) {
    assert.ok(1 === 1, "This shouldnt fail");
    assert.ok(false, "this should fail");
});
//# sourceMappingURL=test1.js.map