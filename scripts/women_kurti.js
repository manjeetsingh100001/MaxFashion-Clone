

var women_kurti = JSON.parse(localStorage.getItem("women_kurtes")) || [];
 displayData(women_kurti);   //calling the display function.
 console.log("women_kurti:",women_kurti);

 // sorting 
 function sortbyprice() {
     let select=document.getElementById("sortPriced");
     if(select.value=="Low") {
           women_kurti.sort(function(a,b){return a.price - b.price;});
     }
     if(select.value=="High") {
           women_kurti.sort(function(a,b){return b.price - a.price;});
     }
  //    if(select.value=="default")
  //    {
  //        women_kurti.sort(function(){return women_kurti})
  //     // displayData(women_kurti);
  //    }

     displayData(women_kurti);
     console.log("women_kurti:",women_kurti);

 }

 

function displayData(women_kurti){

  //appending the product image to the container element.
let container = document.getElementById("kurti_append");
container.innerHTML = null;


women_kurti.map((data) => {

         
  let div = document.createElement("div");
  div.setAttribute("id", "post");
 

  let image = document.createElement("img");
  image.src = data.image_url;
  image.setAttribute("id", "womimg");

  let price = document.createElement("h4");
  price.innerHTML = ` &#x20B9 ${data.price}`;

  let title = document.createElement("p");
  title.innerText = data.name;

  // favourite button 
  let favourite= document.createElement("button");
  favourite.innerHTML =`&#10084`;
  favourite.setAttribute("id", "favourite")
  favourite.onclick = ()=>{
      //add to favorites list function to written.
  }

  // add to basket button creation.//
  
  let div2=document.createElement("div");
  div2.id="div2";
  

  let basket_div= document.createElement("div");
   basket_div.setAttribute("id", "basket_div");

  let basket = document.createElement("button");
  basket.setAttribute("class", "hide");

  basket.innerText = "ADD TO BASKET";
  basket.onclick = () =>{
      localStorage.setItem("single_kurti",JSON.stringify(data));
      alert("Added to cart");

      //basket counter update function to write here. 
  }

  basket_div.append(basket);
  
  
  div.append(favourite,image,price,title);

  div2.append(div,basket_div);

  div.onclick = () => {
    localStorage.setItem("single_kurti", JSON.stringify(data));
    window.location.href = "single_product_women.html";
  };

     container.append(div2);
});
console.log("women_kurti:",women_kurti);

}