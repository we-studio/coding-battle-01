
/**
 * getHighestAndLowest: find the highest and lowest temperature from these thousands values
 * @temperatyres: parameter is an array
 */
function getHighestAndLowest(temperatures) {
    // Your code here
    var first = temperatures[0];
    const extremes = temperatures.reduce((accu, temp) => {
        const value = temp.value;
        if(accu.min > value) {
            accu.min = value;
        }
        else if(accu.max < value) {
            accu.max = value;
        }

        return accu;
    }, {min: first.value, max: first.value});

    return formatMyResult(extremes.min, extremes.max);
}

/** DO NOT TOUCH THIS */

function formatMyResult(min, max) {
    return 'Les températures se situent entre ' + min + '°C et ' + max + '°C';
}

var request = require("request");

request({
    url: 'http://ns323481.ip-37-187-0.eu/coding/temperature10000.json',
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.time('temperatures'); 
        var result = getHighestAndLowest(response.body);
        console.timeEnd('temperatures');
        console.log('Result: ' + result);
    }
})