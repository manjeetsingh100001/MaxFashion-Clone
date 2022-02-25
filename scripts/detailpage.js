var cartarr1=localStorage.getItem("cartproducts")
    var wishcartarr=localStorage.getItem("wishcartproducts")
    var mensdetails=JSON.parse(localStorage.getItem("details"))
    mensdetails.forEach((elem) => {
        let maindetail=document.querySelector("#detail").innerHTML=""
        var div1=document.createElement("div")
        div1.setAttribute("id","dadda")
        var h3=document.createElement("h3")
        h3.textContent=elem.category
        var image=document.createElement("img")
        image.src=elem.image_url
        div1.append(h3,image)
        var div2=document.createElement("div")
        div2.setAttribute("id","pappa")
         var price=document.createElement("h2")
         price.textContent=elem.Symbol+elem.price
         var line1=document.createElement("p")
         line1.textContent="inclusive of all taxes"
         var line2=document.createElement("p")
         line2.textContent="Free shipping on order above ₹999"
         line2.style.textDecoration="underline"
         line2.style.color="blue"
         var image1=document.createElement("img")
         image1.setAttribute("id","smallimage")
         image1.src=elem.image_url
         var line3=document.createElement("p")
         line3.textContent="Size:"
         var div3=document.createElement("div")
         div3.setAttribute("id","sizebox")
         var div4=document.createElement("div")
         div4.setAttribute("class","sizepart")
         div4.textContent="XS"
         var div5=document.createElement("div")
         div5.setAttribute("class","sizepart")
         div5.textContent="XXL"
         var div6=document.createElement("div")
         div6.setAttribute("class","sizepart")
         div6.textContent="XL"
         var div7=document.createElement("div")
         div7.setAttribute("class","sizepart")
         div7.textContent="M"
         var div8=document.createElement("div")
         div8.setAttribute("class","sizepart")
         div8.textContent="S"
         div3.append(div4,div5,div6,div7,div8)
         var div9=document.createElement("div")
         div9.setAttribute("id","buttondiv")
         var sizebutton=document.createElement("button")
         sizebutton.setAttribute("id","sizebutton")
         sizebutton.textContent="ADD TO BASKET"
         sizebutton.addEventListener("click",function(){
       cart1(elem)
          })
         var wishbutton=document.createElement("button")
         wishbutton.setAttribute("id","sizebutton2")
         wishbutton.textContent="ADD TO WISHLIST"
         wishbutton.addEventListener("click",function(){
       wishcart(elem)
         })
         div9.append(sizebutton,wishbutton)
         var div10=document.createElement("div")
         div10.textContent="♡ Add to you favourites"
         div10.style.fontSize="18px"
         div10.style.fontWeight="bold"
         div10.setAttribute("id","fav")
         div2.append(price,line1,line2,image1,line3,div3,div9,div10)
        document.querySelector("#detail").append(div1,div2)
    });
    function cart1(elem){
    cartarr1.push(elem)
    localStorage.setItem("cartproducts",JSON.stringify(cartarr1))
}
function wishcart(elem){
    wishcartarr.push(elem)
    localStorage.setItem("wishcartproducts",JSON.stringify(wishcartarr))
}