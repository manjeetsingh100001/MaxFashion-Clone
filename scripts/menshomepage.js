// Getting data from local storage
 var homemenpage=JSON.parse(localStorage.getItem("homemenspageinfo"));
   
 // Calling function 
        homemenpage.forEach((elem) => {

            //Creating div 
            var div=document.createElement("div")
            div.addEventListener("click",function(){
                tomainpage()
            });

            
            //Creating image element.
            var image=document.createElement("img")
            image.src=elem.image_url
            image.setAttribute("id","homeicon1");

            // Creating element for title.
            var h4=document.createElement("h4")
            h4.textContent=elem.category

            // appending image and title.
            div.append(image,h4)

            // appending div to main div
            document.querySelector("#homepage1").append(div)

        });

        //  function for redirecting to single_product_men.html.
        function tomainpage(){
            window.location.href="single_product_men.html"
        }