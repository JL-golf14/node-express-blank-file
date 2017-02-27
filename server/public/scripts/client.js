$(document).ready(function(){

  function getFishData(){
    $.ajax({
      type: 'GET',
      url: '/fish',
      success: function(response) {
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
        getFishData();
      },
      error: function(error) {
       $("#errorBox").text("Fill the box in please!!!");
     }

    });
  });
});
