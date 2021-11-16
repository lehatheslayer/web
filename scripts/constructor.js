createElementsFromLocalStorageOnWindowLoad = function() {
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
}

addEl = function(val = document.getElementById("todo").value) {
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

   document.getElementById("todo").reset();
}

createNode = function(val, status, idx) {
   var element = document.createElement("div");
   element.id = idx;
   element.classList.add("element");

   var paragraph = document.createElement("p");
   paragraph.id = "text";
   var text = document.createTextNode(val);

   var checkbox = document.createElement("input");
   checkbox.setAttribute("type", "checkbox");
   checkbox.setAttribute("onclick", "changeStatus(this)");
   checkbox.setAttribute("checkbox_id", idx);

   var delBtn = document.createElement("a");
   delBtn.classList.add("delete_button");
   var del_text = document.createTextNode("X");
   delBtn.appendChild(del_text);
   delBtn.setAttribute("onclick", "deleteNode(this)");
   delBtn.setAttribute("btn_id", idx);

   if (status == "done") {
      paragraph.classList.add("done");
      checkbox.checked = true;
   }

   paragraph.appendChild(text);
   element.appendChild(checkbox);
   element.appendChild(paragraph);
   element.appendChild(delBtn);

   document.getElementById("constructor_result").appendChild(element);
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
