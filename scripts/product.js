let url = `http://localhost:5000/products`;

async function FetchApi() {
  try {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    displayData(data);
  } catch (err) {
    console.log("error", error);
  }
}

FetchApi();

function sortbyprice() {
  let select = document.getElementById("sortPriced");
  if (select.value == "Low") {
    women_kurti.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (select.value == "High") {
    women_kurti.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  displayData(women_kurti);
  console.log("women_kurti:", women_kurti);
}



function displayData(women_kurti) {
  //appending the product image to the container element.
  let container = document.getElementById("product_append");
  container.innerHTML = null;

  women_kurti.map((data) => {
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
    let favourite = document.createElement("button");
    favourite.innerHTML = `&#10084`;
    favourite.setAttribute("id", "favourite");
    favourite.addEventListener("click", function () {
      addtoWishlist(data);
    });

    // add to basket button creation.//
    let div2 = document.createElement("div");
    div2.id = "div2";

    let basket_div = document.createElement("div");
    basket_div.setAttribute("id", "basket_div");

    let basket = document.createElement("button");
    basket.setAttribute("class", "hide");

    basket.textContent = "ADD TO BASKET";
    basket.addEventListener("click", function () {
      //adding eventlisterner to "Add to cart button"
      localStorage.getItem("userId");
      addtoCart(data);
    });

    //basket counter update function to write here.

    basket_div.append(basket);

    div.append(favourite, image, price, title);

    div2.append(div, basket_div);

    div.onclick = () => {
      localStorage.setItem("id", data._id);
      window.location.href = "singleproduct.html";
    };

    container.append(div2);
  });

  // alert(data.name + "  " + "Added")
  //<-----Adding to cart here-------->
  async function addtoCart(data) {
    cartData = JSON.stringify(data);
    console.log({ cartData: cartData });
    let res = await fetch("http://localhost:5000/carts/", {
      method: "POST",
      body: cartData,

      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log("res" , res);

    let viewData = await res.json();

    if (viewData) {
      alert(`${data.productName}  Added in your cart`);
    }
    console.log({ viewData: viewData });
  }

  //<----------Adding to wishlist here--------->

  function addtoWishlist(data) {
    wishcartArr.push(data);
    alert(data.name + "  " + "Added");
    localStorage.setItem("wishCartItems", JSON.stringify(wishcartArr));
  }
}
