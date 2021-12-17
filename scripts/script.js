var time1 = new Date().getTime();

window.addEventListener('DOMContentLoaded', function() {
   var loadTime = (new Date().getTime() - time1) / 1000;
   var footer = document.getElementsByTagName("footer");

   var element = document.createElement("div").appendChild(document.createElement('p').appendChild(document.createTextNode("Load time: " + loadTime + " sec")))
   footer[0].appendChild(element)

   document.querySelectorAll("[data-nav]").forEach(function(el) {
      if (el.href === document.location.href || el.href + "?" === document.location.href) {
         el.classList.add("current_page")
      }
   })
});
