$(document).ready(function() {
      $(".back-btn").hide();
    $("#blanks form").submit(function(event) {
      var nameInput = $("input#name").val();
      var dateInput = $("input#date").val();
      var startInput= $("input#start").val();
      var endInput = $("input#end").val();

      $(".name").text(nameInput);
      $(".date").text(dateInput);
      $(".start").text(startInput);
      $(".end").text(endInput);

      $("#viewAppointment").show();

      event.preventDefault();

    $("#appointment-form").hide();
    $("#appointment-header").hide();
    $(".back-btn").show();
  });

  $(".back-btn").click(function(){
    $("#appointment-form").show();
    $("#appointment-header").show();
    $("#viewAppointment").hide();
    $(".back-btn").hide();
    $("input#name").val('');
    $("input#date").val('');
    $("input#start").val('');
    $("input#end").val('');

  });
});
