$(document).ready(function() {

  $(".hoverable").click(function() {
      window.location.href = $(this).attr("data-url");
  });

});
