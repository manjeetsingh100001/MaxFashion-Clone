visibilityInputfield();
var obj = {};
var cartitems;
//<---------------------------------------------------------->

let url = `http://localhost:5000/carts`;

async function FetchApi() {
  try {
    let res = await fetch(url);
    let data = await res.json();

    displayCart(data);
    cartitems = data;
    subtotalShow();
  } catch (err) {
    console.log("error", err);
  }
}

FetchApi();
//<---------------------------------------------------------->

//<--- Calling function and mapping CartItems--------->
var trTotal = 0;

function displayCart(cartitems) {
  document.querySelector("tbody").textContent = "";

  cartitems.map(function (data) {
    var tr = document.createElement("tr"); //main table row for appending all cart data

    //Product Image
    var tdImg = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", data.itemImg);
    tdImg.append(img);

    //Product name
    var tdName = document.createElement("td");
    tdName.textContent = data.itemName;

    //product price
    var tdPrice = document.createElement("td");
    tdPrice.textContent = `₹  ${data.itemPrice} .00`;

    // <------Creating Elements for select and options----->
    var sel_div = document.createElement("div");
    sel_div.id = "sel-Div";

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
      deleteItems(data._id);
    });

    //Total price for 1 qty
    var tdTotalPrice = document.createElement("td");
    tdTotalPrice.innerHTML = `₹ ${data.itemPrice} .00`;

    obj[data._id] = data.itemPrice; //storing ITEM-id & price
    //Total price updating as per qty
    var tdp = document.createElement("td");
    tdp.setAttribute("id", "totalPriceVal");

    sel.addEventListener("change", () => {
      trTotal = data.itemPrice * sel.value; //multiplying
      hellofunction(trTotal, data._id); //updating sub totoal
      tdTotalPrice.innerHTML = "";
      tdp.textContent = `₹ ${trTotal} .00`;
      tdTotalPrice.append(tdp);

      localStorage.setItem("selectedtem", sel.value);
      localStorage.setItem("mytime", Date.now());
    });

    tdremoveBtn.append(td6);
    tr.append(tdImg, tdName, tdPrice, sel_div, tdremoveBtn, tdTotalPrice);
    document.querySelector("tbody").append(tr);
  });
  //tdImg --> product image
  //tdName --> product name
  //sel --> Select & Option
  //tdremoveBtn --> Remove btn
  //tdTotalPrice --> first for 1qty then update with sel * price
}

//<----------Onchage qty subTotal Price update--->
function hellofunction(itemPrice, id) {
  obj[id] = itemPrice;
  subtotalShow(); //calling and refreshing subtotal price
}
// let sum = 0;
// setTimeout( function(){

//   console.log(sum)

// },10000)

//<------ Delete Items here----------->
function deleteItems(id) {
  console.log(id);
  let url = `http://localhost:5000/carts/${id}`;

  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", url);

  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader(
    "Authorization",
    "Bearer mt0dgHmLJMVQhvjpNXDyA83vA_PxH23Y"
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);

      FetchApi();
    }
  };
  xhr.send();
}

//<-----Cart length----->
function cartLength(cartitems) {
  let count = cartitems.length;
  return count;
}

// <--------SUB TOTOAL SHOW --------->
function subtotalShow() {
  var totalSum = 0;
  for (let keys in obj) {
    totalSum += obj[keys];
  }

  document.querySelector(
    "#subtotal"
  ).textContent = `Subtotal: ₹ ${totalSum}.00 (${cartLength(cartitems)} items)`;
}

//<----------- Apply Coupon here------------->
let applied = false;
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var coupon_no = document.querySelector("#CouponInput").value;
  if (coupon_no == "masai30" && applied == false) {
    totalSum = Math.floor((70 / 100) * totalSum);
    document.querySelector(
      "#subtotal"
    ).textContent = `Subtotal: ₹ ${totalSum}.00 (${cartLength(
      cartitems
    )} items)`;
    alert("Coupon Applied Successfully");
    applied = true;
  } else {
    alert("Please enter correct coupon code");
  }
});

//<-------coupon input hide & visible-------->
function visibilityInputfield() {
  formForm.style.visibility = "hidden";
}
function showInputbox() {
  formForm.style.visibility = "visible";
}

// <--------keep select & option value ----->
if (localStorage.getItem("item")) {
  document.getElementById("sel-div").options[
    localStorage.getItem("sel-div")
  ].selected = true;
}
