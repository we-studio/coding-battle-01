/** FINAL CHALLENGE **/

/**
 * getLowestPrice: using `formatMyResult() function`, find the lowest price in all these clubs
 * clubs param is an array of objects
 */
function getLowestPrice(clubs) {
    // Your code here
    var lowestClub = clubs[0];
    var lowestSeason = lowestClub.seasons[0];
    
    return formatMyResult(lowestClub.title, lowestSeason.data.country, lowestSeason.data.price, lowestSeason.title);
}

/** DO NOT TOUCH THIS */

function formatMyResult(clubName, clubCountry, clubPrice, season) {
    return clubName + ' en ' + clubCountry + ' à partir de ' + clubPrice + ' pour la saison ' + season;
}

var request = require("request");

request({
    url: 'http://static.front.cmb-uk.kyokita.net/resorts/en_resorts.json',
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.time('getMeTheLowestPrice'); 
        var result = getLowestPrice(response.body);
        console.timeEnd('getMeTheLowestPrice');
        console.log('Result: ' + result);
    }
})