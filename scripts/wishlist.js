var wishlistItem = JSON.parse(localStorage.getItem("wishCartItems")) || [];

console.log(wishlistItem)
var cartArr = JSON.parse(localStorage.getItem("CartItems")) || [];
console.log(cartArr)
displayCart(wishlistItem);

//<--- Calling function and mapping CartItems--------->

function displayCart(wishlistItem) {
  document.querySelector("tbody").textContent = "";

  wishlistItem.map(function (data, index) {
    var tr = document.createElement("tr");

    var tdImg = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", data.image_url);
    tdImg.append(img);

    var tdName = document.createElement("td");
    tdName.textContent = data.name;

    let tdMAX = document.createElement("div");
    tdMAX.textContent = "MAX"

    var tdRemove = document.createElement("p");
    tdRemove.setAttribute("id","removeBtn")
    tdRemove.innerHTML = "Remove";
    tdRemove.addEventListener("click", function () {
      deleteItems(index);
    });

    var tdPrice = document.createElement("td");
    tdPrice.textContent = `₹ ${data.price} .00`;


    var tdBasket = document.createElement("p");
    tdBasket.setAttribute("id",'addToBasket' );
    tdBasket.innerHTML = "Add to Basket";
    tdBasket.addEventListener("click", function () {
      addtoBasket(data,index);
    });
  
    tdMAX.append(tdName)
    tdPrice.append(tdBasket);
    tdName.append(tdRemove);
    tr.append(tdImg,tdMAX, tdPrice);
    document.querySelector("tbody").append(tr);
  });
}



//<------ Delete Items here----------->

function deleteItems(index) {
  wishlistItem.splice(index, 1);
  localStorage.setItem("wishCartItems", JSON.stringify(wishlistItem));
  displayCart(wishlistItem);
}


// <--------addtoBasket(data);----->

   // Adding to cart here
   function addtoBasket(data,index) {
    cartArr.push(data);
    alert(data.name + "  " + "Added");
    localStorage.setItem("CartItems", JSON.stringify(cartArr));
    deleteItems(index)
  }
  

//<-----Cart length----->
  let count = wishlistItem.length;
console.log(count) ;


//<---Remove All---->
function removeAll(){
  console.log(wishlistItem)

wishlistItem.map((data, index) => {
console.log(data)
wishlistItem.splice(index, count);
localStorage.setItem("wishCartItems", JSON.stringify(wishlistItem));

});
alert("Sucessfully removed all item")
displayCart(wishlistItem);

}


