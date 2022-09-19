$(document).ready(function(){
	$(".box").hide();
	$(".afr-area").mouseenter(function(){
		$("#a").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".afr-area").mouseleave(function(){
		$("#a").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
		$(".afr-area").click(function(){
			$(".popup").show();
			$(".hide").css({"filter":"blur(2px)"});
			});
	
	$(".e").mouseenter(function(){
		$("#e").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".e").mouseleave(function(){
		$("#e").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
	$(".s").mouseenter(function(){
		$("#s").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".s").mouseleave(function(){
		$("#s").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
	$(".c").mouseenter(function(){
		$("#c").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".c").mouseleave(function(){
		$("#c").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
	$(".au").mouseenter(function(){
		$("#au").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".au").mouseleave(function(){
		$("#au").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
	$(".nz").mouseenter(function(){
		$("#nz").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".nz").mouseleave(function(){
		$("#nz").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
	$(".usa").mouseenter(function(){
		$("#usa").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".usa").mouseleave(function(){
		$("#usa").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
	$(".m").mouseenter(function(){
		$("#m").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".m").mouseleave(function(){
		$("#m").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	
	$(".sa").mouseenter(function(){
		$("#sa").show();
		$(".imgBx").animate({
			bottom: '80px'
			},0);
	});
	$(".sa").mouseleave(function(){
		$("#sa").hide();
		$(".imgBx").animate({
			bottom: '10px'
			},0);		
	});
	$(".model-content").mouseenter(function(){
	  $(".model-content h2").show(); 
	  $(".model-content h2").css("filter","none");
	  $(".model-content h4").css("filter","none");
	  $(".model-content p").css("filter","none");
	  $(".red-heart").hide();
	  $(".heart").show();
	   
	});
	
	$(".model-content").mouseleave(function(){
	  $(".model-content h2").hide();
	  $(".model-content h4").css("filter","blur(1.5px)");
	  $(".model-content p").css("filter","blur(1.5px)");
	  $(".red-heart").show();
	  $(".heart").hide();
	});
	$("input").click(function(){
		var result = $('input[class="l"]:checked');
		var result2 = $('input[class="l2"]:checked');
		if(result.length > 0)
		{
			if(result2.length > 0)
			{
			result4.setAttribute('href', 'style.css');
			$(".card").css("background","#fff");
			}
			else
			{
			result4.setAttribute('href', 'style-red.css');
			$(".card").css("background","#fff");
			}
		}
		else
		{
		if(result2.length > 0)
		{
		result4.setAttribute('href', 'style-dark.css');
		$(".card").css("background","#2B2A2A");
		}
		else
		{
		 result4.setAttribute('href', 'style.d-red.css');
		 $(".card").css("background","#2B2A2A");
		}
		}
		
	});
	var result4 = document.getElementById("pagestyle");
	$(".hg").click(function(){
			result4.setAttribute('href', 'style-dark.css');
			$("#social-media").css("background","#D37878");
		});
	
});
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
}
