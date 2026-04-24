// Create a dummy object
const dummyOrderDetails = [
  { id: 1, month: "January", income: 1200000, year: 2024 },
  { id: 2, month: "February", income: 850000, year: 2024 },
  { id: 3, month: "March", income: 950000, year: 2024 },
  { id: 4, month: "April", income: 1100000, year: 2024 }
];

function highestSellingFnTrack({ month, income }) {
  return month === "January" ? "First Month Sales" : "Other Month Sales";
}

const highestSellingMonth = Object.groupBy(dummyOrderDetails, highestSellingFnTrack);
console.log(highestSellingMonth);
