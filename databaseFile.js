/*

Chosen Database: SQLite
Version: 3.36.0
Port Number: SQLite does not use ports, so there is no port number
Download Link: https://www.sqlite.org/download.html

*/

const { directory } = require('mock-fs/lib/filesystem');

const sqlite3 = require('sqlite3').verbose();

module.exports = class dbClass {

    constructor() {
        console.log("Created db class object");
    }

    createCustomer (name, totalGoods) {
        let db = new sqlite3.Database('./testDB.db');

        let sql = `INSERT INTO Customers (CustomerName, TotalGoods) VALUES ('${name}', ${totalGoods})`

        db.all(sql, [], (err, rows) => {
            if(err) {
                return -1;
            }
            return 1;
        })
    }

    createOrder (custId, goodsPurchased) {
        let db = new sqlite3.Database('./testDB.db');

        let sql = `INSERT INTO Orders (CustomerId, GoodsPurchased) VALUES ('${custId}', ${goodsPurchased})`

        db.all(sql, [], (err, rows) => {
            if(err) {
                return -1;
            }
            return 1;
        })
    }

    getAllCustomers () {
        let db = new sqlite3.Database('./testDB.db');

        let sql = `SELECT * FROM Customers`

        db.all(sql, [], (err, rows) => {
            if(err) {
                return -1;
            }

            console.log(rows)


        })

        return 1;
    }

}