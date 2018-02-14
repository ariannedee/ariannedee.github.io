$(document).ready(function(){
    $("a.courses").click(function(e){
      e.preventDefault();
      $("a.filter").removeClass("active");
      $(this).addClass("active");
      $(".item").not('.item.course').slideUp();
      $(".item.course").slideDown();
      return false;
    });
    
    $("a.projects").click(function(e){
      e.preventDefault();
      $("a.filter").removeClass("active");
      $(this).addClass("active");
      $(".item").not('.item.project').slideUp();
      $(".item.project").slideDown();
      return false;
    });
    
    $("a.all").click(function(e){
      e.preventDefault();
      $("a.filter").removeClass("active");
      $(this).addClass("active");
      $(".item").slideDown();
      return false;
    });
});