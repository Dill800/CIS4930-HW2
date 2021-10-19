const fs = require('fs')
const { type } = require('os')

const sumFromFile = {
    sumFromFile: function(path) {

        let data;
        try {
            data = fs.readFileSync(path, 'utf-8');
        }
        catch (err) {
            return -1;
        }

        let dataArr = data.split(',')
        let sum = 0;
        for(let i = 0; i < dataArr.length; i++) {
            //console.log(dataArr[i])
            if(isNaN(dataArr[i]) || !Number.isInteger(parseFloat(dataArr[i]))) {
                return -1;
            }

            sum += parseInt(dataArr[i]);
            
        }

        fs.appendFileSync(path, ','+sum,  'utf-8');

        //console.log(fs.readFileSync(path, 'utf-8'))
    }

}

module.exports = sumFromFile;