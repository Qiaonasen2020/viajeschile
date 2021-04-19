$(function(){                   //nav-bar animacion

    $("a").click(function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });
        }
    });

    $(window).scroll(function() {
        if ($("#nav-menu").offset().top > 450) {
            $("#nav-menu").addClass("bg-dark");
        } else {
            $("#nav-menu").removeClass("bg-dark");
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

});



$(function(){

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();
                
                var gato = this.hash;
                    
                $("html, body").animate({
                scrollTop: $(gato).offset().top
                    }, 800, function(){
                        window.location.hash = gato;
                    
            });        
        }
    });

    
    $('[data-toggle="popover"]').popover();


});