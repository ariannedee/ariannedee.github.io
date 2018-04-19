var show = function(id) {
  $("section").not('#' + id).hide();
  $("section#" + id).show();
  
  if (id === "about") {
    $("footer").hide();
  } else {
    $("footer").show();
  }
}

$(document).ready(function(){
    $("a.menu").click(function(e){
      e.preventDefault();
      return false;
    });
    
    show("about");
});