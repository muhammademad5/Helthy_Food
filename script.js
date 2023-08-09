$("input").click(function(){
        var result = $('input[class="l"]:checked');
        var result2 = $('input[class="l2"]:checked');
        if(result.length > 0)
        {
            if(result2.length > 0)
            {
            result4.setAttribute('href', 'style.css');
            
            }
            else
            {
            result4.setAttribute('href', 'style-red.css');
            
            }
        }
        else
        {
        if(result2.length > 0)
        {
        result4.setAttribute('href', 'style-dark.css');
        
        }
        else
        {
         result4.setAttribute('href', 'style.d-red.css');
         
        }
        }
        
    });
    var result4 = document.getElementById("pagestyle");
    $(".hg").click(function(){
            result4.setAttribute('href', 'style-dark.css');
            $("#social-media").css("background","#D37878");
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









const backToTopToggle = document.querySelector("#l1");

window.addEventListener("scroll", scrollFunction1);

function scrollFunction1() {
  if (window.pageYOffset > 300){ // Show backToTopButton
    if(!backToTopToggle.classList.contains("btnEntrance")) {
      backToTopToggle.classList.remove("btnExit");
      backToTopToggle.classList.add("btnEntrance");
      backToTopToggle.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopToggle.classList.contains("btnEntrance")) {
      backToTopToggle.classList.remove("btnEntrance");
      backToTopToggle.classList.add("btnExit");
      setTimeout(function() {
        backToTopToggle.style.display = "none";
      }, 250);
    }
  }
}

const backToTopToggle2 = document.querySelector("#l2");

window.addEventListener("scroll", scrollFunction2);

function scrollFunction2() {
  if (window.pageYOffset > 300){ // Show backToTopButton
    if(!backToTopToggle2.classList.contains("btnEntrance")) {
      backToTopToggle2.classList.remove("btnExit");
      backToTopToggle2.classList.add("btnEntrance");
      backToTopToggle2.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopToggle2.classList.contains("btnEntrance")) {
      backToTopToggle2.classList.remove("btnEntrance");
      backToTopToggle2.classList.add("btnExit");
      setTimeout(function() {
        backToTopToggle2.style.display = "none";
      }, 250);
    }
  }
}












