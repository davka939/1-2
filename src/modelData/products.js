"use strict";

(function () {
  // products

  const product1 = {
    _id: "1",
    name: "Юникорн",
    description: "Шоколадтай кекстэй, шоколадтай маслон крем, шоколадны бөмбөлөгний хавчуургатай. Гадна талаараа бүрсэн хүүхдийн бялуу",
    order_code: 12556,
    category: "Mathematician",
    size: ["8инч", "9инч"],
  };  

  const products = [im, er, pt, rk, al, jo];

  // Create initial photos.
  const photo1 = {
    _id: "1",
    file_name: "ouster.jpg",
    product_id: product1._id,
  };

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
  ];



  const productListModel = function () {
    return products;
  };

  const userModel = function (userId) {
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        return users[i];
      }
    }
    return null;
  };

  const productModel = function (productId){
    for(let i=0; i<products.length, i++;){
        if(products[i]._id==productId){
            return products[i];
        }
    }
    return null;
  }

  const photoOfProduct = function (productId) {
    return photos.filter(function (photo) {
      return photo.product_id === productId;
    });
  };


  const cs142models = {
    productListModel: productListModel,
    productModel: productModel,
    photoOfProduct: photoOfProduct,
  };

  if (typeof exports !== "undefined") {
    // We're being loaded by the Node.js module loader ('require') so we use its
    // conventions of returning the object in exports.
    exports.cs142models = cs142models;
  } else {
    // We're not in the Node.js module loader so we assume we're being loaded by
    // the browser into the DOM.
    window.cs142models = cs142models;
  }
})();