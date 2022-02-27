//cart & wishlist array to local storage
var cartArr = JSON.parse(localStorage.getItem("CartItems")) || [];

var wishcartArr = JSON.parse(localStorage.getItem("wishCartItems")) || [];

// getting data , mapping and appending
var prodarr = [];
var prod_kurti = JSON.parse(localStorage.getItem("single_kurti"));
prodarr.push(prod_kurti);
console.log(prodarr);
appendprod(prodarr);
function appendprod(prodarr) {
  prodarr.forEach((el) => {
    let container = document.getElementById("parent");

    let div = document.createElement("div");

    let cont_div = document.createElement("div");
    cont_div.setAttribute("id", "show");

    let image = document.createElement("img");
    image.src = el.image_url;
    image.setAttribute("id", "img");

    let title = document.createElement("h3");
    title.setAttribute("id", "tit");
    title.innerText = el.name;

    ///////////////////////////////////////////////////
    // price details
    let price_details = document.createElement("div");
    price_details.setAttribute("id", "details");

    let p_div = document.createElement("div");
    p_div.setAttribute("id", "p_div");
    let price = document.createElement("h4");
    price.innerHTML = `&#x20B9 ${el.price}/-`;
    price.setAttribute("id", "price");
    let ptag = document.createElement("p");
    ptag.setAttribute("id", "ptag");
    ptag.innerText = "inclusive all taxes";
    p_div.append(price, ptag);

    ////////////////////////////////////////////
    // Size box //
    let size = document.createElement("div");
    size.setAttribute("id", "size");

    let size_text = document.createElement("p");
    size_text.innerText = "Choose Size: ";

    let s = document.createElement("button");
    s.setAttribute("class", "box");
    s.innerText = "S";

    let m = document.createElement("button");
    m.setAttribute("class", "box");
    m.innerText = "M";

    let l = document.createElement("button");
    l.setAttribute("class", "box");
    l.innerText = "L";

    let xl = document.createElement("button");
    xl.setAttribute("class", "box");
    xl.innerText = "XL";

    let xxl = document.createElement("button");
    xxl.setAttribute("class", "box");
    xxl.innerText = "XXL";

    size.append(size_text, s, m, l, xl, xxl);
    ////////////////////////////////////////////////////////////////

    // Add to basket button.
    let basket = document.createElement("button");
    basket.setAttribute("id", "basket");
    basket.innerText = "ADD TO BASKET";
    basket.addEventListener("click", function () {
      //adding eventlisterner to "Add to cart button"
      addtoCart(el);
    });

    let favourite = document.createElement("button");
    favourite.innerHTML = `&#10084 Add to Favourites`;
    favourite.setAttribute("id", "favourite");
    favourite.addEventListener("click", function () {
      addtoWishlist(el);
    });

    let promotion = document.createElement("button");
    promotion.setAttribute("id", "promotion");
    promotion.innerHTML = "PROMOTION OFFER";

    let promo_text = document.createElement("p");
    promo_text.setAttribute("id", "promo");
    promo_text.innerText =
      "Get Rs.200 Off on 1999 & above orders, code- MAX200 | Rs. 100 Off on 999 & above (First Purchase Only), code- NEW100";

    price_details.append(p_div, size, basket, favourite, promotion, promo_text);

    cont_div.append(image, price_details);

    div.append(title, cont_div);

    container.append(div);
  });

  //<----------Adding to cart here--------->
  function addtoCart(data) {
    cartArr.push(data);
    alert(data.name + "  " + "Added");
    localStorage.setItem("CartItems", JSON.stringify(cartArr));
  }

  //<----------Adding to wishlist here--------->

  function addtoWishlist(data) {
    wishcartArr.push(data);
    alert(data.name + "  " + "Added");
    localStorage.setItem("wishCartItems", JSON.stringify(wishcartArr));
  }
}
