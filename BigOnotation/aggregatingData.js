const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const groupData = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }
  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;
  return table;
}, {});
console.log(groupData);
