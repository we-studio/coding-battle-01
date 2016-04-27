
/**
 * getHighestAndLowest: find the highest and lowest temperature from these thousands values
 * @temperatyres: parameter is an array
 */
function getHighestAndLowest(data) {
    var min = Infinity, max = 0;
    data.forEach(function(x) {
        var value = x.value;
        if(min > value) min = value;
        else if (max < value) max = value;
    });

    return formatMyResult(min, max);
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
