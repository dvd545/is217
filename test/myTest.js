function isOdd(val) {
    return val % 2 === 1;
}
 
test('isOdd()', function() {
    ok(isOdd(1), 'One is an odd number');
    ok(isOdd(3), 'So is three');
    ok(isOdd(15), 'So is fifteen');
    ok(!isOdd(8), 'Eight is not an odd number');
    ok(!isOdd(-4), 'Neither is negative four');
})