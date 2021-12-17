window.addEventListener('DOMContentLoaded', function() {
   if (!localStorage.hasOwnProperty("list")) {
      var options = [];
      localStorage.setItem("list", JSON.stringify(options));
      localStorage.setItem("counter", 0);
   } else {
      var options = JSON.parse(localStorage.getItem("list"));
      for (var opt in options) {
         createNode(options[opt].val, options[opt].status, options[opt].idx);
      }
   }
});

addEl = function(val = document.getElementById("todo").value) {
   if (/[^\s]/i.test(val)) {
      var options = localStorage.hasOwnProperty("list") ? JSON.parse(localStorage.getItem("list")) : [];
      var counter = localStorage.hasOwnProperty("counter") ? localStorage.getItem("counter") : 0;

      var tmp = {}
      tmp.val = val;
      tmp.status = "active";
      tmp.idx = counter;
      options.push(tmp);

      localStorage.setItem("list", JSON.stringify(options));
      localStorage.setItem("counter", parseInt(counter, 10) + 1);
      createNode(val, "active", counter);

      document.getElementById("todo").value = "";
   }
}

createNode = function(val, status, idx) {
   let template = document.querySelector("#constructor_template");

   let clone = template.content.cloneNode(true);

   clone.querySelector("div").id = idx;

   var text = document.createTextNode(val);
   clone.querySelector("p").appendChild(text);

   clone.querySelector("input").setAttribute("checkbox_id", idx);

   clone.querySelector("a").setAttribute("btn_id", idx);

   if (status == "done") {
      clone.querySelector("p").classList.add("done");
      clone.querySelector("input").checked = true;
   }

   document.getElementById("constructor_result").appendChild(clone);
}

changeStatus = function(checkbox) {
   var id = checkbox.getAttribute("checkbox_id");

   var options = JSON.parse(localStorage.getItem("list"));
   for (var opt in options) {
      if (options[opt].idx == id) {
         if (checkbox.checked) {
            options[opt].status = "done";
            document.getElementById(id).getElementsByTagName("p")[0].classList.add("done");
         } else {
            options[opt].status = "active";
            document.getElementById(id).getElementsByTagName("p")[0].classList.remove("done");
         }

         break;
      }
   }

   localStorage.setItem("list", JSON.stringify(options));
}

deleteNode = function(btn) {
   var id = btn.getAttribute("btn_id");

   var options = JSON.parse(localStorage.getItem("list"));
   for (var opt in options) {
      if (options[opt].idx == id) {
         options.splice(opt, 1);
         break;
      }
   }
   document.getElementById("constructor_result").removeChild(document.getElementById(id));

   localStorage.setItem("list", JSON.stringify(options));
}
