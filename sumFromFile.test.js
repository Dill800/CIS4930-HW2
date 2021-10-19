const fs = require('fs')

const sumFromFile = require('./sumFromFile');

const mock = require('mock-fs')

// #stub
// The mock text files can be thought of as stubs since i hard code the value of the file for all of them
beforeAll(() => {
    mock({
        'mock.txt': '1,2,3,4',
        'mock2.txt': '-1,-2,-3,-4',
        'mock3.txt': '1,2,yarp,4',
        'mock4.txt': '1.1,2,3,4'
    })
})
afterAll(() => {
    mock.restore();
})

// #stub
test('Sum simple integers from file and append to end with a comma', () => {
    let fileName = 'mock.txt';
    sumFromFile.sumFromFile(fileName);
    expect(fs.readFileSync(fileName, 'utf-8')).toBe('1,2,3,4,10')
})

// #stub
test('Sum negative integers from file and append to end with a comma', () => {
    let fileName = 'mock2.txt';
    sumFromFile.sumFromFile(fileName);
    expect(fs.readFileSync(fileName, 'utf-8')).toBe('-1,-2,-3,-4,-10')
})

// #stub
test('Bad file name should return a -1', () => {
    let fileName = 'badFileName.txt';
    expect(sumFromFile.sumFromFile(fileName)).toBe(-1);
})

// #stub
test('string delimited input should return a -1', () => {
    let fileName = 'mock3.txt';
    expect(sumFromFile.sumFromFile(fileName)).toBe(-1);

})

// #stub
test('float delimited input should return a -1', () => {
    let fileName = 'mock4.txt';
    expect(sumFromFile.sumFromFile(fileName)).toBe(-1);

})