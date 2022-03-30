// <----radio check only one condition---->
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("check");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

let cards = false;
//<-------divs input hide & visible start-------->
cards_hide_show.style.display = "none";
//<------- cards details----->
function showCardForm() {
  if (cards == false) {
    cards_hide_show.style.display = "inline-block";
    cards = true;
  } else {
    cards_hide_show.style.display = "none";
    cards = false;
  }
}

//<------- Address Box details----->
let open = false;
add_box.style.display = "none";
function showAddress() {
  if (open == false) {
    add_box.style.display = "inline-block";
    open = true;
  } else {
    add_box.style.display = "none";
    open = false;
  }
}

//<------- Coupon code 30% details----->
let inputform = false;
promoForm.style.display = "none";
function showInputbox() {
  if (inputform == false) {
    promoForm.style.display = "inline-block";
    inputform = true;
  } else {
    promoForm.style.display = "none";
    inputform = false;
  }
}

//<-------divs input hide & visible end-------->
// let address = document.querySelector('form').addEventListener("submit", addressForm)

// pay now onclick active and taking value of card details
//& confirming cvv match

function payNow() {
  var cardHolderName = document.querySelector("#cardH").value;
  var cardNumber = document.querySelector("#cardNum").value;
  var expMM = document.querySelector("#expMM").value;
  var expYear = document.querySelector("#expYear").value;
  var cvv = document.querySelector("#cvv").value;

  console.log(cardHolderName, cardNumber, expMM, expYear, cvv);

  if (
    (cardHolderName = "") ||
    (cardNumber = "") ||
    expMM == "" ||
    expYear == ""
  ) {
    alert("Please Fill All the Details");
  } else if (cvv == 123) {
    alert("Congratulation! your payment is succesful");
    window.location.href = "thankyou.html";
  } else {
    alert("Invalid CVV");
  }
}

// cart right side CART details

let url = `http://localhost:5000/carts`;

var cartItems;
async function FetchApi() {
  try {
    let res = await fetch(url);
    let data = await res.json();

    displayCart(data);
    cartItems = data;
    subtotalShow(data);
  } catch (err) {
    console.log("error", err);
  }
}

FetchApi();
console.log("cart", cartItems);
//<--- Calling function and mapping CartItems--------->
var trTotal = 0;

function displayCart(cartItems) {
  document.querySelector("tbody").textContent = "";

  cartItems.map(function (data) {
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
    tdPrice.textContent = ` ₹ ${data.itemPrice}`;

    var sel = document.createElement("p");
    sel.setAttribute("id", "qntySelect");
    sel.textContent = `Qty : ${1}`;

    tdName.append(sel);
    tr.append(tdImg, tdName, tdPrice);
    document.querySelector("tbody").append(tr);
  });
  //tdImg --> product image
  //tdName --> product name
  //sel --> Select & Option
  //tdremoveBtn --> Remove btn
  //tdTotalPrice --> first for 1qty then update with sel * price
}

//<----------Onchage qty subTotal Price update--->

//<-----Cart length----->

function cartLength(cartItems) {
  let count = cartItems.length;
  return count;
}

//<----------show total Price----------->

var totalSum = 0;

function subtotalShow(data) {
  totalSum = data.reduce(function (acc, cv) {
    return acc + Number(cv.itemPrice);
  }, 0);
  console.log(trTotal);

  document.querySelector(
    "#subtotal"
  ).textContent = `Total: ₹ ${totalSum}.00 (${cartLength(cartItems)} items)`;
}

//<----------- Apply Coupon here------------->
let i = 0;
document
  .querySelector("#promoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var coupon_no = document.querySelector("#CouponInput").value;
    if (coupon_no == "masai30" && i == 0) {
      totalSum = Math.floor((70 / 100) * totalSum);
      document.querySelector(
        "#subtotal"
      ).textContent = `Total: ₹ ${totalSum}.00 (${cartLength(
        cartItems
      )} items)`;
      alert("Coupon Applied Successfully");
      i++;
    } else {
      i == 1
        ? alert("Coupon apllied already")
        : alert("Please enter correct coupon code");
    }
  });
