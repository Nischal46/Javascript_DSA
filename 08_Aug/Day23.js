const products = [
    { name: 'Laptop', price: 1500, category: 'Electronics' },
    { name: 'Shirt', price: 50, category: 'Clothing' },
    { name: 'Coffee Maker', price: 100, category: 'Kitchen' },
    { name: 'Headphones', price: 200, category: 'Electronics' },
    { name: 'Pants', price: 70, category: 'Clothing' },
  ];

  function filterProducts(products) {
    return function (criteria) {
      return products.filter(product => {
        const matchesPrice = criteria.price !== undefined ? product.price <= criteria.price : true;
        const matchesCategory = criteria.category !== undefined ? product.category === criteria.category : true;
        return matchesPrice && matchesCategory;
      });
    };
  }

  const filterByPrice = filterProducts(products)({ price: 100 });
const filterByCategory = filterProducts(products)({ category: 'Clothing' });
const filterByBoth = filterProducts(products)({ price: 200, category: 'Electronics' });

console.log(filterByPrice); 
console.log(filterByCategory);
console.log(filterByBoth);