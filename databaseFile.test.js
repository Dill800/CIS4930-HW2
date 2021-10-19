const dbClassMock = require('./__mocks__/databaseFileMock');

// #stub
// This would be considerd a stub because i hard coded the mocked createCustomer method to return a 1
test('Creating a customer should not fail', () => {
    let temp = new dbClassMock();
    expect(temp.createCustomer()).toBe(1)
})

// #stub
test('Creating an order should not fail', () => {
    let temp = new dbClassMock();
    expect(temp.createOrder()).toBe(1)
})

// #mock
test('Creating an order should only add 1 order to database (called only once)', () => {
    let temp = new dbClassMock();
    const mock = jest.fn(temp.createOrder)
    mock(6, 89)
    expect(mock.mock.calls.length).toBe(1)
})

// #stub
test('Retrieving all customers should not fail', () => {
    let temp = new dbClassMock();
    expect(temp.getAllCustomers()).toBe(1)
})

// #mock
// we are capturing parameters passed to functions
test('First argument to create customer method should be the customers name', () => {
    let temp = new dbClassMock();
    const mock = jest.fn(temp.createCustomer);
    mock('testName', 8);
    expect(mock.mock.calls[0][0]).toBe('testName');
})

// #mock
test('Second argument to create customer method should be the total goods', () => {
    let temp = new dbClassMock();
    const mock = jest.fn(temp.createCustomer);
    mock('testName', 8);
    expect(mock.mock.calls[0][1]).toBe(8);
})

// #mock
test('First argument to create order method should be a customer id', () => {
    let temp = new dbClassMock();
    const mock = jest.fn(temp.createOrder);
    mock(1, 8);
    expect(mock.mock.calls[0][0]).toBe(1);
})