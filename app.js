//Key: d64bfe6503177a15
//URL: http://api.wunderground.com/api/d64bfe6503177a15/conditions/q/CA/Monterey.json


var weatherUndergroundURL = 'http://api.wunderground.com/api/d64bfe6503177a15/conditions';


var resultTemplate = (
  '<div>' +
    '<h2 class="city-name"></h2>' +
    '<p>Current Temperature: <span class="current-temperature"></span></p>' +
  '</div>'
);

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: weatherUndergroundURL,
    data: {
      q: searchTerm + " in:name",
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}