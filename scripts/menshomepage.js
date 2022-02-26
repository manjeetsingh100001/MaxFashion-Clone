var homemenpage=JSON.parse(localStorage.getItem("homemenspageinfo"))
        homemenpage.forEach((elem) => {
            var div=document.createElement("div")
            div.addEventListener("click",function(){
                tomainpage()
            })
            var image=document.createElement("img")
            image.src=elem.image_url
            image.setAttribute("id","homeicon1")
            var h4=document.createElement("h4")
            h4.textContent=elem.category
            div.append(image,h4)
            document.querySelector("#homepage1").append(div)
        });
        function tomainpage(){
            window.location.href="single_product_men.html"
        }