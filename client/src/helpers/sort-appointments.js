export const sortArray = (items, sortBy, order) => {
  if (sortBy === "none" || !items || !items.length) return items;

  const sorted = [...items].sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA === null || valueA === undefined) return 1;
    if (valueB === null || valueB === undefined) return -1;

    let comparison = 0;

    switch (true) {
      case typeof valueA === "string" && typeof valueB === "string":
        comparison = valueA.localeCompare(valueB);
        break;
        
      case !isNaN(Date.parse(valueA)) && !isNaN(Date.parse(valueB)):
        comparison = new Date(valueA) - new Date(valueB);
        break;
        
      case typeof valueA === "number" && typeof valueB === "number":
        comparison = valueA - valueB;
        break;
        
      default:
        comparison = 0;
        break;
    }

    return order === "ascending" ? comparison : -comparison;
  });

  return sorted;
};
