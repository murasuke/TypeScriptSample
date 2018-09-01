QUnit.module("Test Suite 1");

QUnit.test("Test A", (assert)=>{
    assert.ok(true, "This Shouldnt fail");
});

QUnit.test("Test B", (assert)=>{
    assert.ok(1 === 1, "This shouldnt fail");
    assert.ok(false, "this should fail");
});
