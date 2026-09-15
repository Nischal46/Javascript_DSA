function CheckInventory(userChoice) {
  let avalibale_products = [
    { id: 1, title: "Polo T-shirts", productNo: "P-123" },
    { id: 2, title: "Cargo pants", productNo: "C-4356" }
  ];

  let check_available = avalibale_products.some((item) => item.productNo === userChoice);

  console.log("response inside of checking inventory ---", check_available);

  setTimeout(() => {
    return check_available;
  }, 2000);
}

function MainStartup() {
  const response = CheckInventory("P-123");
  console.log(response, "--response");
}

MainStartup();
