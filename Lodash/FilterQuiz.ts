import _ from "lodash";

var products = [
  {
    id: 1,
    name: "Milk",
    price: "1$",
  },
  {
    id: 2,
    name: "Bread",
    price: "2$",
  },
  {
    id: 3,
    name: "Meat",
    price: "3$",
  },
];

function searchProducts(products: any, searchedValue: string) {
  return _.filter(products, function (product) {
    return _.includes(product.name, searchedValue);
  });
}

console.log(searchProducts(products, "M"));
