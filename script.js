$('.segangBanner>ul>li').hide();
$('.segangBanner>ul>li:first-child').show();
setInterval(function(){
  $('.segangBanner>ul>li:first-child').fadeOut().next().fadeIn().end(10000).appendTo('.segangBanner>ul');
},3000);

window.addEventListener("keydown", function(event) {
  if (event.keyCode==50){
    window.addEventListener("keydown", function(event) {
      if (event.keyCode==50){
        window.addEventListener("keydown", function(event) {
          if (event.keyCode==50){
            window.addEventListener("keydown", function(event) {
              if (event.keyCode==50){
                window.addEventListener("keydown", function(event) {
                  if (event.keyCode==50){
                    window.addEventListener("keydown", function(event) {
                      if (event.keyCode==50){
                        window.addEventListener("keydown", function(event) {
                          if (event.keyCode==50){
                            location = "/dw/dw.html";
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
