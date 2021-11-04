var time1 = new Date().getTime();

window.onload = function() {
   var loadTime = (new Date().getTime() - time1) / 1000;
   var footer = document.getElementsByTagName("footer");

   var element = document.createElement("div").appendChild(document.createElement('p').appendChild(document.createTextNode("Load time: " + loadTime + " sec")))
   footer[0].appendChild(element)

   if (document.location.href.indexOf("works") > -1) {
        var curelem = document.getElementById("works")
    }
    else if (document.location.href.indexOf("index") > -1) {
        var curelem = document.getElementById("home")
    }
    else if (document.location.href.indexOf("achievements") > -1) {
        var curelem = document.getElementById("achievements")
    }
    curelem.style.borderBottom = "2px solid #d31c3e"
}
