$(document).ready(function(){
  var additem = function() {
    var boxtext = $('#textbox').val();
    $("#todolist").append("<li>"+boxtext+"</li>");
    console.log($('#textbox').val());
  }
  $("#addbutton").click(additem);
});


