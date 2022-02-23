function footer(){
    return `<footer>
    <div id="footerContainer ">
      <hr />
      <div id="subscription-container flex">
        <div>
          <h2>Subscribe to our awesome emails.</h2>
          <p>Get our latest offers and news straight in your inbox.</p>
          <input class="input-sub-box" type="text" placeholder="Please enter an email address" />
          <button class="btn-sub-box">Subscribe</button>
        </div>

        <div>
          <h2>Download our apps</h2>
          <p>Shop our products and offers on-the-go.</p>
          <span><img src="/resources/app-logo.png" alt="" /></span>
        </div>
      </div>

      <hr />

      <!-- list of items (sub-section of footer) -->
      <div class="list-container">
        <div class="list-up-div flex">
          <div>
            <p><b>Women</b></p>
            <p>Tops</p>
            <p>Dresses & Jumpsuits</p>
            <p>Sportswear</p>
            <p>Bottoms</p>
            <p>Winterwear</p>
            <p>Ethnicwear</p>
            <p>Lingerie</p>
            <p>Sleepwear</p>
            <p>Accessories</p>
            <p>Shoes</p>
          </div>
          <div>
            <p><b>Men</b></p>

            <p>Tops</p>
            <p>Bottoms</p>
            <p>Sportswear</p>
            <p>Winterwear</p>
            <p>Accessories</p>
            <p>Shoes</p>
          </div>
          <div>
            <p><b>Boys</b></p>
            <p>Tops</p>
            <p>Bottoms</p>
            <p>Indian Wear</p>
            <p>Winter Wear</p>
            <p>Essentials</p>
            <p>Accessories</p>
            <p>Shoes</p>
          </div>
          <div>
            <p><b>Girls</b></p>
            <p>Tops</p>
            <p>Bottoms</p>
            <p>Indian Wear</p>
            <p>Winter Wear</p>
            <p>Essentials</p>
            <p>Accessories</p>
            <p>Shoes</p>
          </div>
          <div>
            <b>Explore</b>
            <p>Offers</p>
            <p>Magazine</p>
          </div>
        </div>
        <div class="list-down-div flex">
          <div>
            <b>About</b>
            <p>About us</p>
            <p>Write to us</p>
            <p>Careers</p>
            <p>Take a Tour</p>
            <p>Blog</p>
            <p>Store Locator</p>
            <p>Landmark Cares</p>
          </div>
          <div>
            <p><b>Help</b></p>
            <p>Contact us</p>
            <p>Shipping</p>
            <p>Returns Process</p>
            <p>Returns Policy</p>
            <p>Help Centre</p>
          </div>
        </div>
      </div>

      <!-- social media  (sub-section of footer) -->
      <div id="footer-banner-social">
        <hr />
        <div class="social flex">
          <div><img src="/resources/facebook.png" alt="" /></div>
          <div><img src="/resources/twitter.png" alt="" /></div>
          <div><img src="/resources/insta.png" alt="" /></div>
        </div>
        <hr />
      </div>

      <!-- copyright section (sub-section of footer)  -->
      <div id="copyright-div" class="flex">
        <img src="/resources/max.png" alt="max-logo" />
        <p>
          © 2022 Retail World Limited. <br />
          Terms & Conditions - Privacy Policy
        </p>
      </div>
    </div>
  </footer>`
}
export default footer;