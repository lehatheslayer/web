var time1 = new Date().getTime();

window.onload = function() {
   var loadTime = (new Date().getTime() - time1) / 1000;
   var footer = document.getElementsByTagName("footer");

   var element = document.createElement("div").appendChild(document.createElement('p').appendChild(document.createTextNode("Load time: " + loadTime + " sec")))
   footer[0].appendChild(element)

   var curelem = document.querySelectorAll("[data-act]");
   curelem.forEach(function(userItem) {
      userItem.style.borderBottom = "2px solid #d31c3e";
   })
}
