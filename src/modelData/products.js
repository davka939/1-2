"use strict";


(function () {
  const products = [
    {
      _id: "1",
      name: "Юникорн",
      description: "Шоколадтай кекстэй, шоколадтай маслон крем, шоколадны бөмбөлөгний хавчуургатай. Гадна талаараа бүрсэн хүүхдийн бялуу",
      price: ["43,000", "50,000"],
      order_code: 12556,
      category: "happy_cake",
      size: ["8инч", "9инч"],
      picture_path: "product1"
    },
    {
      _id: "2",
      name: "Шоколадтай Бялуу",
      description: "Амтат шоколадтай жинхэнэ баярын бялуу.",
      price: ["43,000", "50,000"],
      order_code: 12557,
      category: "brand_cake",
      size: ["7инч", "8инч"],
      picture_path: "choco_cake.jpg"

    },
    // Бусад бүтээгдэхүүнийг нэмнэ...
  ];


  
  const productListModel = function () {
    return products;
  };

  const productModel = function (productId) {
    return products.find((product) => product._id === productId) || null;
  };
  
  const categoryProducts = function (category) {
    return products.filter((product) => product.category === category);
  };


  const ProductModels = {
    productListModel: productListModel,
    productModel: productModel,
    categoryProducts: categoryProducts,
  };

  if (typeof exports !== "undefined") {
    exports.ProductModels = ProductModels;
  } else {
    window.ProductModels = ProductModels;
  }
})();
