export const sortArray = (array, sortBy, order) => {
  if (sortBy === "none" || !array) return array;

  const copyArray = [...array];

  switch (order) {
    case "ascending":
      return copyArray.sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (!valueA || !valueB) {
          return !valueA ? 1 : -1;
        }

        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      });

    case "descending":
      return copyArray.sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy]; 

        if (!valueA || !valueB) {
          return !valueA ? 1 : -1;
        }

        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      });

    default:
      return array;
  }
};
