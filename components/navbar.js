function nav() {
    return ` 
    <nav class="nav">
        <div class="black-container flex">
            <!-- for black band menu  -->
            <ul class="black-left-menu flex">
                <li><i class="fas fa-truck"></i> Fast Shipping</li>
                <li><i class="fas fa-undo"></i>Return to store</li>
                <li><i class="far fa-user"></i>Click & collect</li>
            </ul>
            <ul class="black-right-menu flex">
                <li>
                    <a href="https://www.maxfashion.in/in/en/apps">Download our app</a>
                </li>
                <li>
                    <a href="https://www.maxfashion.in/in/en/storelocator">Store Location</a>
                </li>
                <li>
                    <a href="https://helpin.maxfashion.com/support/home#">Help</a>
                </li>
            </ul>
        </div>

        <div class="white-container flex">
            <ul class="white-left-menu flex">
                <li>
                    <a href="/index.html"><img src="resources/max.png" alt="max-logo" /></a>
                </li>
                <li><a href="/womens.html">Women</a></li>
                <li><a href="/men.html">Men</a></li>
                <li></li>
                <li><a href="#">Girls</a></li>
                <li><a href="#">Boys</a></li>
                <li>
                    <i class="fa-regular fa-magnifying-glass"></i><input id="search" type="text"
                        placeholder=" what are you looking for?" />
                </li>
            </ul>

            <ul class="white-right-menu flex">
                <li>
                    <p id="hi_user"></p>
                    <p>
                        <a  href= "signup.html">SignUp</a>
                    </p>
                </li>
                <li>|</li>
                <li>
                    <a href="cart.html"><i class="fas fa-shopping-bag"></i>Basket</a>
                </li>
            </ul>
        </div>
    </nav>

   

`
}
export default nav;



