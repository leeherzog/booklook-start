var fetch = function (code) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + code,
      success: function(data) {
        console.log(data);
        var source = $("#book-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template(data);
        $(".book").append(newHTML);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

  $(".search-book").on("click", function(){
      var code = $("#isbn").val();
      return fetch(code);
  })

