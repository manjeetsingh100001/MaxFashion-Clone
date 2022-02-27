// let creditcard = document.getElementById(creditcard).checked;

console.log(creditcard.checked)

// <----radio check only one condition---->
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
};


//<-------divs input hide & visible start-------->
cards_hide_show.style.display = "none";
//<------- cards details----->
function showCardForm() {
    cards_hide_show.style.display = "inline-block";
};

//<------- Address Box details----->
add_box.style.display = "none";
function showAddress(){
add_box.style.display = "inline-block";
}

//<------- Coupon code 30% details----->
promoForm.style.display = "none";
function showInputbox() {
    promoForm.style.display = "inline-block";
}

//<-------divs input hide & visible end-------->
// let address = document.querySelector('form').addEventListener("submit", addressForm)


// pay now onclick active and taking value of card details
//& confirming cvv match

function payNow(){
    var cardHolderName = document.querySelector("#cardH").value;
  var cardNumber = document.querySelector("#cardNum").value;
  var expMM = document.querySelector("#expMM").value;
  var expYear = document.querySelector("#expYear").value;
  var cvv = document.querySelector("#cvv").value;

  console.log(cardHolderName,cardNumber,expMM,expYear,cvv)
 
  if (cvv == 123) {
    alert("Congratulation! your payment is succesful");
    window.location.href = "thankyou.html";
  }
  else{
    alert("Invalid CVV");
  }

}


// cart right side CART details

var cartitems = JSON.parse(localStorage.getItem("CartItems")) || []; //cart array from localstorage

displayCart(cartitems);

//<--- Calling function and mapping CartItems--------->
var trTotal = 0;

function displayCart(cartitems) {
  document.querySelector("tbody").textContent = "";

  cartitems.map(function (data, index) {
    var tr = document.createElement("tr"); //main table row for appending all cart data

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
    tdPrice.textContent = ` ₹ ${data.price}`;

   

    var sel = document.createElement("p");
    sel.setAttribute("id", "qntySelect");
    sel.textContent = `Qty : ${1}`;


  

 

   



    tdName.append(sel)   
    tr.append(tdImg, tdName, tdPrice);
    document.querySelector("tbody").append(tr);
  });
  //tdImg --> product image
  //tdName --> product name
  //sel --> Select & Option
  //tdremoveBtn --> Remove btn
  //tdTotalPrice --> first for 1qty then update with sel * price
}


console.log(cartitems)

//<----------Onchage qty subTotal Price update--->

//<------ Delete Items here----------->

function deleteItems(index) {
  cartitems.splice(index, 1);
  localStorage.setItem("CartItems", JSON.stringify(cartitems));
  displayCart(cartitems);
  subtotalShow();e
  cartLength(cartitems);
}

//<-----Cart length----->
cartLength(cartitems);

function cartLength(cartitems) {
  let count = cartitems.length;
  return count;
}

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
  ).textContent = `Total: ₹ ${totalSum}.00 (${cartLength(cartitems)} items)`;
  }

//<----------- Apply Coupon here------------->

document.querySelector("#promoForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var coupon_no = document.querySelector("#CouponInput").value;
  if (coupon_no == "masai30") {
    totalSum = Math.floor((70 / 100) * totalSum);
    document.querySelector(
      "#subtotal"
    ).textContent = `Total: ₹ ${totalSum}.00 (${cartLength(
      cartitems
    )} items)`;
    alert("Coupon Applied Successfully");
  } else {
    alert("Please enter correct coupon code");
  }
});

