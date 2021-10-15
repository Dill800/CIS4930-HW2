const sumFromFile = require('./sumFromFile');

test('Sum integers from file', () => {
    expect(sumFromFile.sumFromFile("this/is/path/to/fiole")).toBe(null);
})