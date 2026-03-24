const dataCache = new Map();

const expensiveTask = (id) => {
  console.log("Expensive task running, ", id);
  return { id, name: `Name ${id}`, timestamp: new Date().getTime() };
};

const getTask = (id) => {
  if (dataCache.has(id)) {
    console.log("Cache hit, ", id);
    return dataCache.get(id);
  }
  console.log("Cache miss");
  const data = expensiveTask(id);
  dataCache.set(id, data);
  return data;
};
console.log(getTask(123));
console.log(dataCache);
console.log(getTask(123));
