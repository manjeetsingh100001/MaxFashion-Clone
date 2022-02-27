var cartitems = JSON.parse(localStorage.getItem("CartItems")) //cart array from localstorage

displayCart(cartitems);

//<--- Calling function and mapping CartItems--------->
var trTotal = 0;

function displayCart(cartitems) {
  document.querySelector("tbody").textContent = "";

  cartitems.map(function (data, index) {
    var tr = document.createElement("tr");    //main table row for appending all cart data


    //Product Image
    var tdImg = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", data.image_url);
    tdImg.append(img);
    
    //Product name
    var tdName = document.createElement("td");
    tdName.textContent = data.name;

    //product price
    var tdPrice = document.createElement("td");
    tdPrice.textContent = `₹  ${data.price} .00`;

    // <------Creating Elements for select and options----->
    let sel_div = document.createElement("div");
    sel_div.id = "sel-Div"

    var sel = document.createElement("select");
    sel.setAttribute("id", "qntySelect");

    var opt1 = document.createElement("option");
    var opt2 = document.createElement("option");
    var opt3 = document.createElement("option");
    var opt4 = document.createElement("option");
    var opt5 = document.createElement("option");

    opt1.text = 1;
    opt2.text = 2;
    opt3.text = 3;
    opt4.text = 4;
    opt5.text = 5;

    sel.add(opt1);
    sel.add(opt2);
    sel.add(opt3);
    sel.add(opt4);
    sel.add(opt5);

    sel_div.append(sel);
    // <------Ending Point of select and options----->

// Delete item remove btn
    var tdremoveBtn = document.createElement("div");
    tdremoveBtn.setAttribute("id", "removeBtn");

    var td6 = document.createElement("p");
    td6.innerHTML = "Remove";
    td6.addEventListener("click", function () {
      deleteItems(index);
    });


    //Total price for 1 qty
    var tdTotalPrice = document.createElement("td");
    tdTotalPrice.innerHTML = `₹ ${data.price} .00`;

    //Total price updating as per qty 
    var tdp = document.createElement("td");
     tdp.setAttribute('id','totalPriceVal');
    sel.addEventListener("change", () => {
      trTotal = data.price * sel.value;   //multiplying price * sel option
      console.log(trTotal)
      tdTotalPrice.innerHTML = "";
      // localStorage.setItem("totalArr", JSON.stringify(trTotal));
      tdp.textContent = `₹ ${trTotal} .00`;
      tdTotalPrice.append(tdp);
      subtotalShow() //calling and refreshing subtotal price
      
    });

   

    tdremoveBtn.append(td6);
    tr.append(tdImg, tdName, tdPrice,sel_div, tdremoveBtn, tdTotalPrice);
    document.querySelector("tbody").append(tr);
  });
  //tdImg --> product image
  //tdName --> product name
  //sel --> Select & Option
  //tdremoveBtn --> Remove btn
  //tdTotalPrice --> first for 1qty then update with sel * price
}

//<----------Onchage qty subTotal Price update--->

//<------ Delete Items here----------->

function deleteItems(index) {
  cartitems.splice(index, 1);
  localStorage.setItem("CartItems", JSON.stringify(cartitems));
  displayCart(cartitems);
  subtotalShow()
  cartLength(cartitems)
}



//<-----Cart length----->
cartLength(cartitems)

 function cartLength(cartitems) {
 
  let count = cartitems.length;
  return count;
};




//<----------show total Price----------->
// var loccalTotal = JSON.parse(localStorage.getItem("trTotal"));


var totalSum = 0;
subtotalShow()
function subtotalShow(){
   totalSum = cartitems.reduce(function (acc, cv) {
    return acc + Number(cv.price);
  }, 0);
  console.log(trTotal)
  
  document.querySelector(
    "#subtotal"
  ).textContent = `Subtotal: ₹ ${totalSum}.00 (${cartLength(cartitems)} items)`;
  }


//<----------- Apply Coupon here------------->

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var coupon_no = document.querySelector("#CouponInput").value;
  if (coupon_no == "masai30") {
    totalSum = Math.floor((70 / 100) * totalSum);
    document.querySelector(
      "#subtotal"
    ).textContent = `Subtotal: ₹ ${totalSum}.00 (${cartLength(cartitems)} items)`;
    alert("Coupon Applied Successfully");
  } else {
    alert("Please enter correct coupon code");
  }
});

//<-------coupon input hide & visible-------->
formForm.style.visibility = "hidden";
function showInputbox() {
  formForm.style.visibility = "visible";
}
