$(document).ready(function(){

	$(".next").click(function(){
		const current_img = $(".show") ;
		const next_img = current_img.next();

		if(next_img.length){
			current_img.removeClass("show");
			next_img.addClass("show");
		}
	});
	$(".prev").click(function(){
		const current_img = $(".show") ;
		const prev_img = current_img.prev();

		if(prev_img.length){
			current_img.removeClass("show");
			prev_img.addClass("show");
		}
	});
});


$(document).ready(function(){
    $(".round-button").hide();
    
    $(".card").mouseenter(function(){
        $(".round-button").show();
    });
});

$(document).ready(function(){
    $(".v1").hide();
    
    $(".round-button").click(function(){
        $(".v1").toggle(1000);
    });
});


$(document).ready(function(){
    $(".round-button2").hide();
    
    $(".card2").mouseenter(function(){
        $(".round-button2").show();
    });
});

$(document).ready(function(){
    $(".v2").hide();
    
    $(".round-button2").click(function(){
        $(".v2").toggle(1000);
    });
});

$(document).ready(function(){
    $(".round-button3").hide();
    
    $(".card3").mouseenter(function(){
        $(".round-button3").show();
    });
});

$(document).ready(function(){
    $(".v3").hide();
    
    $(".round-button3").click(function(){
        $(".v3").toggle(1000);
    });
});
$(document).ready(function(){
    $(".round-button4").hide();
    
    $(".card4").mouseenter(function(){
        $(".round-button4").show();
    });
});

$(document).ready(function(){
    $(".v4").hide();
    
    $(".round-button4").click(function(){
        $(".v4").toggle(1000);
    });
});

$(document).ready(function(){
    $(".round-button5").hide();
    
    $(".card5").mouseenter(function(){
        $(".round-button5").show();
    });
});

$(document).ready(function(){
    $(".v5").hide();
    
    $(".round-button5").click(function(){
        $(".v5").toggle(1000);
    });
});