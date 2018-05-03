//Key: d64bfe6503177a15
//URL: http://api.wunderground.com/api/d64bfe6503177a15/conditions/q/CA/Monterey.json



//STATE OBJECT
function getApiData(searchTerm){
  $.getJSON("http://api.wunderground.com/api",
    {
      key:'d64bfe6503177a15',
      q: `${searchTerm}`,
    }, 
    displaySearchData);
}

//STATE MODIFICATION
function showResults(result){
  console.log(result)
  return `
    <div> +
    '<h2 class="city-name">${result.city}</h2>' +
    '<p>Current Temperature: <span class="current-temperature">${result.temperature_string}</span></p>' +
    '<p>Current Wind Conditions: <span class="current-wind-conditions">${result.wind_string}</span></p>' +
    </div>
  `
}

//RENDERING
function displaySearchData(data){
//  console.log(data);
  const results = data.items.map((item, index) => showResults(item));
  $('.js-search-results').html(results);
}
 
//EVENT LISTENERS
function userSubmit(){
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    queryTarget.val('');
    getApiData(query);
    
    console.log(query);
   
  });
}
 
$(userSubmit);