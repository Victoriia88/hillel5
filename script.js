const categories = document.querySelectorAll(".category");
const productsDiv = document.querySelector(".products");
const productInfoDiv = document.querySelector(".product-info");

const categoriesData = {
  Ноутбуки: [
    "MacBook Air 2020 M1 512 Gb Space Gray",
    "MacBook Air 2022 M2 512 Gb Space Gray",
  ],
  Смартфони: [
    "iPhone 14 Pro 128Gb Purple",
    "iPhone 14 Pro 256Gb Gold",
    "iPhone 14 Pro 512Gb Silver",
  ],
  Планшети: ["iPad 10.2 128 Gb Silver", "iPad 10.2 256 Gb Gold"],
};

const productInfoData = {
  "MacBook Air 2020 M1 512 Gb Space Gray": {
    name: "MacBook Air 2020 M1 512 Gb Space Gray",
    price: 39999,
  },
  "MacBook Air 2022 M2 512 Gb Space Gray": {
    name: "MacBook Air 2022 M2 512 Gb Space Gray",
    price: 63999,
  },
  "iPhone 14 Pro 128Gb Purple": {
    name: "iPhone 14 Pro 128Gb Purple",
    price: 44999,
  },
  "iPhone 14 Pro 256Gb Gold": {
    name: "iPhone 14 Pro 256Gb Gold",
    price: 47999,
  },
  "iPhone 14 Pro 512Gb Silver": {
    name: "iPhone 14 Pro 512Gb Silver",
    price: 49999,
  },
  "iPad 10.2 128 Gb Silver": {
    name: "iPad 10.2 128 Gb Silver",
    price: 13999,
  },
  "iPad 10.2 256 Gb Gold": {
    name: "iPad 10.2 256 Gb Gold",
    price: 15999,
  },
};

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const categoryName = category.textContent;
    displayProducts(categoryName);
  });
});

function displayProducts(categoryName) {
  productsDiv.innerHTML = "";

  const productList = categoriesData[categoryName];
  if (productList) {
    productList.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.textContent = product;
      productItem.addEventListener("click", () => {
        displayProductInfo(product);
      });
      productsDiv.appendChild(productItem);
    });
  }
}

function displayProductInfo(productName) {
  productInfoDiv.innerHTML = "";

  const productInfo = productInfoData[productName];
  if (productInfo) {
    const productInfoItem = document.createElement("div");
    productInfoItem.innerHTML = `
            <h3>${productInfo.name}</h3>
            <p>Ціна: ${productInfo.price} грн</p>
            <button onclick="buyProduct('${productInfo.name}')">Купити</button>
        `;
    productInfoDiv.appendChild(productInfoItem);
  }
}

function buyProduct(productName) {
  alert(`Товар "${productName}" куплений.`);
  productInfoDiv.innerHTML = "";
  productsDiv.innerHTML = "";
}
