export const sortArray = (array, sortBy, order) => {
  if (!array.length || sortBy === "none") return array;

  const copyArray = [...array];

  copyArray.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    switch (order) {
      case "ascending":
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;

      case "descending":
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;

      default:
        return 0;
    }
  });
  
  return copyArray;
};