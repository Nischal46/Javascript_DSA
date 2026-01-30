//NOTE: Loop of the  objects

let object = {
  products_details: {
    new_arrival: {
      arrival_date: "2025-10-05",
      products_array: [
        {
          id: 1,
          type: "Laptop",
          brand: "DELL",
          squ: 4,
        },
        {
          id: 2,
          type: "Monitor",
          brand: "BENQ",
          squ: 9,
        },
      ],
    },
    stock_product: [
      {
        id: 1,
        type: "Mouse",
        brand: "Fantech",
        squ: 3,
      },
      {
        id: 2,
        type: "Keyboard",
        brand: "Fantech",
        squ: 6,
      },
    ],
  },
};

//NOTE: Extracting and displaying products types

function NewArrivalProducts(object) {
  let displayingProducts = Object.entries(object.products_details).map(
    ([key, value]) => {
      console.log(key);
      return { id: key, ...value }; // Return the product with its key as id
    },
  );
  return displayingProducts;
}

let result = NewArrivalProducts(object);
console.log(result);
