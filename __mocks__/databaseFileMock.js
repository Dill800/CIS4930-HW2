const sqlite3 = require('sqlite3').verbose();

module.exports = class dbClassMock {

    constructor() {
        //console.log("Created db class mock object");
    }

    createCustomer (name, totalGoods) {
        return 1;
    }

    createOrder (custId, goodsPurchased) {
        return 1;
    }

    getAllCustomers () {
        //console.log("This is where all of the customers would be returned")
        return 1;
    }

}