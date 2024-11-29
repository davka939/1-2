const images_s = {
    product1: require("./product1.png"),
    product2: require("./product2.png"), 
};

const findImage = function (picture_name) {
    return images_s[picture_name] || null;
};

export { images_s, findImage }; 
