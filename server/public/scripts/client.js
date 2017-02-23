$(document).ready(function(){
  console.log("JQUERY GOOD");
  getFishData();
  function getFishData(){
    $.ajax({
      type: 'GET',
      url: '/fish',
      success: function(response) {
        console.log('response', response);
          $('#fishTank').empty();
          $("#errorBox").empty();
        for (var i = 0; i < response.length; i++) {
          $('#fishTank').append('<li>' + response[i].name + '</li>')
        } //loop
      }//success
    });//ajax

    $.ajax({
      type: 'GET',
      url: '/fish/first/name',
      success: function(response) {
        $('#firstFish').text(response);
      }
    });
  };


  $("#newFishButton").on('click', function(){
    var newFishObject = {};
    newFishObject.name = $("#newFishName").val();
    console.log(newFishObject);
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      // data: $("#newFishName").val(); can be written like this
      data: newFishObject,  /// this becomes req.body
      success: function(response){

        console.log(response);
        getFishData();
      },
      error: function(error) {
       $("#errorBox").text("Fill the box in please!!!");
     }

    });
  });
});
