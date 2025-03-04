

 let url = `http://localhost:5000/mens`;

 async function FetchApi() {
 
     try {
         let res = await fetch(url);
         let data = await res.json();
 
         console.log(data);
         displayData(data)
         
     } catch (err) {
         console.log("error", error);
     }
 };
 
 FetchApi();
 
 


 function sortbyprice() {
     let select=document.getElementById("sortPriced");
     if(select.value=="Low") {
           women_kurti.sort(function(a,b){return a.price - b.price;});
     }
     if(select.value=="High") {
           women_kurti.sort(function(a,b){return b.price - a.price;});
     }
     displayData(women_kurti);
     console.log("women_kurti:",women_kurti);

 }

//  category: "Women "
// color: "Blue "
// imageURL: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011069467-Blue-LIGHTBLUE-1000011069467-10032022_01-2100.jpg"
// overview: "Comfortable and elegant, this printed T-shirt with a round neck and short sleeves is a perfect addition to your casual wardrobe. Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"
// price: "299 "
// productName: "MAX Printed Round Neck T-shirt"
// sub_category: "Tops "
// _id: "6244480900b2438e325e2d23"

function displayData(men_shirt){

  //appending the product image to the container element.
let container = document.getElementById("product_append");
container.innerHTML = null;


men_shirt.map((data) => {

         
  let div = document.createElement("div");
  div.setAttribute("id", "post");
 

  let image = document.createElement("img");
  image.src = data.imageURL;
  image.setAttribute("id", "productImg");

  let price = document.createElement("h4");
  price.innerHTML = ` &#x20B9 ${data.price}`;

  let title = document.createElement("p");
  title.innerText = data.productName;

  // favourite button 
  let favourite= document.createElement("button");
  favourite.innerHTML =`&#10084`;  
  favourite.setAttribute("id", "favourite")
  favourite.addEventListener("click", function () {
    addtoWishlist(data);
  });

  // add to basket button creation.//
  let div2=document.createElement("div");
  div2.id="div2";
  

  let basket_div= document.createElement("div");
   basket_div.setAttribute("id", "basket_div");

  let basket = document.createElement("button");
  basket.setAttribute("class", "hide");

  basket.textContent = "ADD TO BASKET";
  basket.addEventListener("click", function() {
     //adding eventlisterner to "Add to cart button"
    addtoCart(data)
})

      

      //basket counter update function to write here. 
  

  basket_div.append(basket);
  
  
  div.append(favourite,image,price,title);

  div2.append(div,basket_div);

  div.onclick = () => {
    localStorage.setItem("id", (data._id));
    window.location.href = "SinglemenShirt.html";
  };

     container.append(div2);
});



 //<-----Adding to cart here-------->
 function addtoCart(data) {
  cartArr.push(data)
  alert(data.name + "  " + "Added")
  localStorage.setItem("CartItems", JSON.stringify(cartArr))

}

 //<----------Adding to wishlist here--------->

 function addtoWishlist(data) {
  wishcartArr.push(data);
  alert(data.name + "  " + "Added");
  localStorage.setItem("wishCartItems", JSON.stringify(wishcartArr));
}

}