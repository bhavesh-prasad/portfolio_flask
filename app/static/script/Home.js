
document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function() {
        const t = gsap.timeline({dafaults : {ease : "power1.out"}});
        console.log('Done');    
        t.to('.textspan1' , { y:"0%" , duration : 0.5   });
        t.to('.textspan2', {y:"0%" , duration : 0.5 });
        t.to('.helperSplashWindow', {y:"-100%" , duration :1.3 , delay : 0.5 });
        t.to('.initialSplashWindow',{ y:"-100%" , duration:1.5} , "-=1");
      
    };
  
});