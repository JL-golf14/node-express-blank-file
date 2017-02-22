$(document).ready(function(){
console.log("JQUERY GOOD");

$.ajax({
  type: 'GET',
  url: '/fish',
  success: function(response) {
    console.log('response', response);
    for (var i = 0; i < response.length; i++) {
      $('#fishTank').append('<li>' + response[i].name + '</li>')
    } //loop
  }//success
});//ajax

$.ajax({
  type: 'GET',
  url: '/fish/first/name',
  success: function(response) {
    $('#firstFish').text(response)
  }
});


});
