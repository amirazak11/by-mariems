
// $(function () {
//   $("#navBar").load("navBar.html");
//   $("#navSlider").load("navslider.html");
//   $("#icons").load("icons.html");
//   $("#footer").load("Footer.html");
//   $("#gray-footer").load("gray-footer.html");
//   $("#sideNav").load("Sidenavbar.html");
// });

$(document).ready(() => {
  $(".loading-screen").fadeOut(1000);
});
let navBar = document.getElementById("navBar");
let footer = document.getElementById("footer");

let navBarcontainer= `
<nav class=" bg-white shadow-sm py-lg-2 py-4">
<div class="container nav d-block  navbar-expand-lg bg-body-tertiary ">
  <div class="row align-items-center justify-content-center">
    <div class="col-lg-4 col-5">
      <a class=" d-flex align-items-center icon-menu" role="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <i class="fa-solid fa-bars text-dark fs-3"></i>
    </a>
    </div>
    <div class="col-lg-4 d-lg-block d-none">
            <div class="justify-content-center d-lg-flex d-none">
      <a class="navbar-brand  py-2 text-center  m-0" href="index.html">
    
      <img class="m-0" width="181" src="assets/imgs/home/image1.svg" />
    </a>
      </div></div>
    <div class="col-lg-4 col-6">

      <div class="d-flex justify-content-end" id="navbarSupportedContent">
        <form class="d-flex ">
        <div class="px-2 d-flex" role="button">
        <span class="px-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_184_672" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_184_672)">
          <path d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 11.8833 19.9958 11.7625 19.9875 11.6375C19.9792 11.5125 19.975 11.4083 19.975 11.325C19.8917 11.8083 19.6667 12.2083 19.3 12.525C18.9333 12.8417 18.5 13 18 13H16C15.45 13 14.9792 12.8042 14.5875 12.4125C14.1958 12.0208 14 11.55 14 11V10H10V8C10 7.45 10.1958 6.97917 10.5875 6.5875C10.9792 6.19583 11.45 6 12 6H13C13 5.61667 13.1042 5.27917 13.3125 4.9875C13.5208 4.69583 13.775 4.45833 14.075 4.275C13.7417 4.19167 13.4042 4.125 13.0625 4.075C12.7208 4.025 12.3667 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12H9C10.1 12 11.0417 12.3917 11.825 13.175C12.6083 13.9583 13 14.9 13 16V17H10V19.75C10.3333 19.8333 10.6625 19.8958 10.9875 19.9375C11.3125 19.9792 11.65 20 12 20Z" fill="#0C0C0C"/>
        </g>
      </svg>
        </span>
        <span >العربية</span>
          </div>
          <div class="px-2 search-input-icon" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <circle cx="9" cy="8.99994" r="8" stroke="#0C0C0C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.5 14.9579L19.5 19.9579" stroke="#0C0C0C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      </div>
        <div class="px-2 ">
        <a href="login.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
        <circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 12 1)" stroke="#0C0C0C" stroke-width="1.5"/>
        <path d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175V13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175V13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z" stroke="#0C0C0C" stroke-width="1.5"/>
      </svg>
      </a>     </div>
      <div class="px-2 " onclick="document.location='washList.html'" role="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.66275 13.2136L9.82377 19.7066C11.0068 20.9533 12.9932 20.9534 14.1762 19.7066L20.3372 13.2136C22.5542 10.8771 22.5543 7.08895 20.3373 4.75248C18.1203 2.416 14.5258 2.416 12.3088 4.75248V4.75248C12.1409 4.92938 11.8591 4.92938 11.6912 4.75248V4.75248C9.47421 2.416 5.87975 2.416 3.66275 4.75248C1.44575 7.08895 1.44575 10.8771 3.66275 13.2136Z" stroke="#0C0C0C" stroke-width="1.5"/>
    </svg>
    </div>
          <div class="px-2 "  >
          <a href="shoppingCart.html">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path d="M2.53715 9.47134C2.80212 7.48412 4.49726 6 6.50207 6H13.4979C15.5027 6 17.1979 7.48412 17.4628 9.47135L18.3962 16.4713C18.7159 18.8693 16.8504 21 14.4313 21H5.56873C3.14958 21 1.2841 18.8693 1.60382 16.4713L2.53715 9.47134Z" stroke="#0C0C0C" stroke-width="1.5"/>
          <path d="M14 8V5C14 2.79086 12.2091 1 10 1V1C7.79086 1 6 2.79086 6 5L6 8" stroke="#0C0C0C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        </a>
          </div>
        </form>
      </div>
    </div>

  </div>






</div>
</nav>
<div class="search-container position-fixed top-0 start-0 end-0 bottom-0 bg-white">
<a type="button" class="close-div position-absolute">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</a>
<form class="h-100 w-100 d-flex justify-content-center align-items-center">
  <input type="text" class="nosubmit search-input border rounded-2 border-1 border-black" placeholder="Search here....">
</form>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header justify-content-end">

  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
    <i class="fa-solid fa-xmark"></i>
  </button>
</div>
<div class="offcanvas-body h-100 d-flex flex-column">
<h5 class="offcanvas-title text-center" id="offcanvasRightLabel">
<a href="index.html">
<img class="m-0" width="181" src="assets/imgs/home/image1.svg" />
</a>
</h5>
  <ul class="navbar-nav  mb-2 mb-lg-0 p-3 text-uppercase">
    <li class="nav-item ">
      <a class="nav-link " aria-current="page" href="index.html">
      <span>
      Home
      </span>
      </a>
    </li>
    <li class="nav-item ">
    <a class="nav-link " aria-current="page" href="allProducts.html" >
    <span>New in</span></a>
  </li>
  <li class="nav-item ">
  <a class="nav-link " aria-current="page" href="allProducts.html" >
  <span>Seasonal</span>
  </a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
Summer wear
</span>
</a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
winter wear
</span>
</a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
work attire
</span> 
</a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
view all
</span>
</a>
</li>
  </ul>
  <ul class="navbar-nav  mb-2 mb-lg-0 p-3 text-uppercase">
  <li class="nav-item ">
    <a class="nav-link " aria-current="page" href="ourStores.html" >
    <span>Our story
    </span>
    </a>
    <a class="nav-link " aria-current="page" href="contactus.html" ><span>contact us</span></a>
  </li>
  </ul>
  <div class="mt-auto m-auto">
   <a class="text-danger text-decoration-underline">Logout</a>
  </div>
</div>
</div>
<div class="floatwhatsapp ">
<i class="fa-brands fa-whatsapp "></i>

</div>
<div class="back-to-top" id="backTop">
<i class="fa fa-arrow-up "></i>

</div>
  `

navBar.innerHTML = navBarcontainer;
let FooterContainer= `
<div class="container py-5">
<div class="row justify-content-between" data-aos="fade-up" data-aos-duration="3000">
<div class="col-md-2 col-12 d-flex ">
<ul class="p-0 fs-6 ">
  <li class="py-1">
    <a href="index.html">
    Home
    </a>
  </li>
  <li class="py-1">
  <a href="ourStores.html">
  Our story
  </a>
</li>
</ul>
</div>
  <div class="col-md-2 col-12 ">
    <ul class="p-0 fs-6 ">
      <li class="py-1">
        <a href="Terms.html">
        Terms and conditions
        </a>
      </li>
      <li class="py-1">
      <a href="productcare.html">
      Product care
      </a>
    </li>
    </ul>
  </div>
  <div class="col-md-2 col-12 d-flex ">
<ul class="p-0 fs-6 ">
  <li class="py-1 text-white" >
    <a  role="button" data-bs-toggle="modal" data-bs-target="#filter">
    Size Guide
    </a>
  </li>
  <li class="py-1">
  <a href="FAQ.html">
  FAQs
  </a>
</li>
</ul>
</div>
  <div class="col-md-2 col-12 d-flex ">
    <ul class="p-0 fs-6 ">
      <li class="py-1">
        <a href="contactus.html">
        Contact us
        </a>
      </li>
    </ul>
  </div>
  <div class="col-md-3 col-12">
    <h4 class="p-lg-2 py-2 text-white fs-6">

    get in touch
    </h4>
    <ul class="social d-flex p-0">
      <li>
        <a href="#">
          <i class="fab fa-facebook-f icon"></i>
        </a>
      </li>
      <li>
        <a href="#"><i class="fab fa-twitter icon"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-instagram icon">
        </i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-whatsapp icon"></i></a>

      </li>
    </ul>
  </div>
</div>
</div>

<div class="container py-3">


<div class="row justify-content-center">
<div class="col-md-7 col-12 text-center fs-6 border-top py-2 text-uppercase">
@Bymariams
</div>
  <div class="col-md-7 col-12 text-center  emcan">
    Powared by<span class=""> <a class="text-black" href="https://emcan-group.com/en">emcan</a> </span>
  </div>

</div>

</div>
<div class="modal fade " id="filter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">

  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container-fluid">

          <div class="row fs-6">
            <table class="table text-center">
              <thead >
                <tr>
                  <th scope="col">Size (uS)</th>
                  <th scope="col">Size # (uS)</th>
                  <th scope="col">Bust (in)</th>
                  <th scope="col">Waist (in)</th>
                  <th scope="col">Hips (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>

                </tr>
                <tr>
                  <td>S</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>

                </tr>
                <tr>
                  <td >M</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>
                </tr>
                <tr>
                  <td >l</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
  `
  footer.innerHTML = FooterContainer;
  $(document).ready(function () {
    $(".search-input-icon").click(function () {
      $(".search-container").fadeIn();
      $(".search-input").animate({
        width: '80%'
      });
    });
    $(".close-div").click(function () {
      $(".search-container").fadeOut();
      $(".search-input").animate({
        width: '0%',
      });
    });

  });
  $(document).ready(() => {
    let container = $(".section-top").offset().top;
    $(window).scroll(function () {
      let windowScroll = $(window).scrollTop();
      if (windowScroll > container) {
        $("#backTop").show(500);
        $("#backTop").fadeIn(500);
      }
      else {
        $("#backTop").fadeOut(500);
    
      }
    })
    $("#backTop").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 300)
    })
    });