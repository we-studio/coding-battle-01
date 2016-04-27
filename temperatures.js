/**
 * getHighestAndLowest: find the highest and lowest temperature from these thousands values
 * @temperatyres: parameter is an array
 */
function getHighestAndLowest(temperatures) {


    p = temperatures;

    Array.prototype.max = function() {
      return Math.max.apply(null, this);
    };

    Array.prototype.min = function() {
      return Math.min.apply(null, this);
    };

temperatures.values

tab=[]

temperatures.forEach(function(item) {
  tab.push(item.value);
})





    return formatMyResult(tab.min(), tab.max());

    // return formatMyResult(lowestTemp.value, highestTemp.value);
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
