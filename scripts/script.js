var time1 = new Date().getTime();

window.onload = function() {
   var loadTime = (new Date().getTime() - time1) / 1000;
   var footer = document.getElementsByTagName("footer");

   var element = document.createElement("div").appendChild(document.createElement('p').appendChild(document.createTextNode("Load time: " + loadTime + " sec")))
   footer[0].appendChild(element)

   if (window.location.href.endsWith("works.html") == true) {
      var curelem = document.getElementById("works")
   }
   else if (window.location.href.endsWith("index.html") == true
         || window.location.href.endsWith("web/") == true) {
      var curelem = document.getElementById("home")
   }
   else if (window.location.href.endsWith("achievements.html") == true) {
      var curelem = document.getElementById("achievements")
   }

   curelem.style.borderBottom = "2px solid #d31c3e"
}
