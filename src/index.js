//swiper slider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const featureProductList = [
  {
    id: 1,
    name: "Smartphones",
    description: "Apple IPhone 14 Pro, LTPO Super Retina XDR OLED 6.1'",
    image: "../src/assets/images/smartphones/01.png",
    price: "$ 1,200.00",
  },
  {
    id: 2,
    name: "Laptop & Pcs",
    description: "Laptop 2in1 Asus VivoBook S 14 Flip TP3402ZA Intel® Core™",
    image: "../src/assets/images/laptop/4.png",
    price: "$ 1,000.00",
  },
  {
    id: 3,
    name: "Accessory",
    description: "Headphones, Noise Cancelling, Bluetooth 5.0",
    image: "../src/assets/images/headsets/04 1.png",
    price: "$ 50.00",
  },
  {
    id: 4,
    name: "Tv & Audio",
    description: "Panasonic SC-TMAX10E-K, Bluetooth, 300W, AIRQUAKE",
    image: "../src/assets/images/audio/19 1.png",
    price: "$ 240.00",
  },
  {
    id: 5,
    name: "Accessory",
    description: "Smartwatch iHunt Watch 6 Titan, Display Full Touch 1.28'",
    image: "../src/assets/images/smartwatch/24 1.png",
    price: "$ 250.00",
  },

]

//get feature product list
const getProductList = () => {
  let productsFeature = ""
  featureProductList.map((item)=> {
    productsFeature += `
                        <div class="product-list">
                          <article class="box">
                            <span>${item.name}</span>
                            <p>${item.description}</p>
                          </article>
                          <figure class="product-img">
                            <img src="${item.image}" alt="${item.name}"/>
                          </figure>
                          <div class="price-box"> 
                            <span class="price">${item.price}</span>
                            <span class="cart-icon"><i class="fa-solid fa-bag-shopping"></i></span>
                          </div>
                        </div>
    `
  })
  document.querySelector(".product-feature").innerHTML += productsFeature
};
getProductList();

//product category list
const categoryList = [
  {
    id: 1,
    name: "Tv & Audio",
    description: "",
    image: "../src/assets/images/tv/01 1.png",
    price: "",
  },
  {
    id: 2,
    name: "Smartphones",
    description: "",
    image: "../src/assets/images/smartphones/02 1.png",
    price: "",
  },
  {
    id: 3,
    name: "Laptop & Pcs",
    description: "",
    image: "../src/assets/images/laptop/1.png",
    price: "",
  },
  {
    id: 4,
    name: "Accessory",
    description: "",
    image: "../src/assets/images/accessory/04 2.png",
    price: "",
  },
  {
    id: 5,
    name: "Accessory",
    description: "",
    image: "../src/assets/images/headsets/13 4.png",
    price: ""
  },
  {
    id: 6,
    name: "Tv & Audio",
    description: "",
    image: "../src/assets/images/audio/15 3.png",
    price: "",
  },
  {
    id: 7,
    name: "Accessory",
    description: "",
    image: "../src/assets/images/accessory/10 3.png",
    pirce: "",
  },
  {
    id: 8,
    name: "Tv & Audio",
    description: "",
    image: "../src/assets/images/tv/14 1.png",
    price: "",
  },
]
const getCategoryList = () => {
  let category = "";
  categoryList.map((item) => {
    category += `
      <div class="category-box">
        <article class="category-title">
          <span>${item.name}</span>
        </article>
        <figure class="img___wrapper">
          <img src="${item.image}"/>
        </figure>
        <div class="arrow-icon">
          <span class="arrow-box"><i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    `;
  });
  document.querySelector(".category-wrapper").innerHTML += category;
};
getCategoryList()

//best selling product
const bestSellingList = [
  {
    id: 1,
    name: "Laptop & Pcs",
    description: "Laptop HP 250 G9, Procesor Intel® Core™ i5-1235U",
    image: "../src/assets/images/laptop/2.png",
    price: "$ 490.00",
  },
  {
    id: 2,
    name: "Accessory",
    description: "Headphones Stereo Bose QuietComfort 35 II (Silver)",
    image: "../src/assets/images/headsets/15 1.png",
    price: "$ 280.00",
  },
  {
    id: 3,
    name: "Laptop & Pcs",
    description:
      "IPS LED Lenovo ThinkVision 27' T27i-10, Full HD (1920 x 1080)",
    image: "../src/assets/images/laptop/3.png",
    price: "$ 180.00",
  },
  {
    id: 4,
    name: "Accessory",
    description: "Smartwatch Huawei Watch GT 3, Display AMOLED 1.32'",
    image: "../src/assets/images/smartwatch/09 1.png",
    price: "$ 100.00",
  },
  {
    id: 5,
    name: "Accessory",
    description: "Charger Samsung, Super Fast Charging 25 W ",
    image: "../src/assets/images/accessory/11 3.png",
    price: "$ 10.00",
  },
]
const getBestSellingProduct = () => {
  let bestSelling = "";
  bestSellingList.map((products, index) => {
    bestSelling += `
      <div class="product-list">
        <article class="box">
          <span>${products.name}</span>
          <p>${products.description}</p>
        </article>
        <figure class="product-img">
          <img src="${products.image}"/>
        </figure>
        <div class="price-box">
          <span class="price">${products.price}</span>
          <span class="cart-icon"><i class="fa-solid fa-bag-shopping"></i></span>
        </div>
      </div>
    `;
  });
  document.querySelector(".box2").innerHTML = bestSelling;
};
getBestSellingProduct()
