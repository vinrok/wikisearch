//jquery syntax..

/* $('.search-button').click(function(event) {
  // Act on the event
alert("Hello search");
}); */

// console.log(searchString);

var displayWikipediaData = function(){
  var $linkElement = $('#links');
  var searchString = $('#searchString').val();
  var wikipediaUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchString + '&format=json&callback=wikiCallback';

  $.ajax({
    url: wikipediaUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: function(res) {
      var linkList = res[1];
      linkList.forEach(function(item) {
        var url = 'https://en.wikipedia.org/wiki/' + item;
        $linkElement.append('<li><a href="' + url + '">' + item + '</a></li>');
        //return url;
      })
    }
  });
  return false;
};

$('#form').submit(displayWikipediaData);
