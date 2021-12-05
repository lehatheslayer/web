function fetchAPI() {
   let loader = '<div class="cssload-container"> <span class="cssload-loader"><span class="cssload-loader-inner"></span></span></div>';
   document.getElementById('result').innerHTML = loader;

   let gallery_container = document.createElement("div");
   gallery_container.classList.add("gallery");

   fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.status);
         } else {
            return response.json();
         }
      })
      .then((json) => {
         document.getElementById('result').innerHTML = '';

         if (localStorage.getItem("number") == 1){
           localStorage.setItem("number", 0);
         }
         else {
              localStorage.setItem("number", 1);
         }

         json.filter(FilterFunc).forEach((item) => {
            var image = document.createElement("img");
            image.src = item.url;
            image.classList.add("gallery_item");
            image.style.width = "300px";
            image.style.height = "300px";

            gallery_container.appendChild(image);
         });

         document.getElementById('result').appendChild(gallery_container);
      })
      .catch((error) => {
         document.getElementById('result').innerHTML = '<div class="cssload-container"><p>⚠Что-то пошло не так</p></div>';
         console.log('Error: ' + error);
      });
}

function FilterFunc(i){
    let num = localStorage.getItem("number");
    if (num == 0)
        return i.id <= 100
    else
        return 100 < i.id && i.id <= 200
}
