import CustomSelector from "../UI/CustomSelector";
import { sortedList } from "../../constants";
import { valueSortedList } from "../../constants";
import { StyledSortedContainer } from "./style";

const SortingComponent = ({
  sortOption,
  sortOrder,
  handleSortChange,
  handleOrderChange,
}) => {
  return (
    <StyledSortedContainer>
      <CustomSelector
        labelSelector="Сортировать по:"
        options={sortedList}
        valueSelector={sortOption}
        handleChangeSelector={(e) => handleSortChange(e.target.value)}
        classNameSelectorContainer="sorting-component__lable-container"
      />
      {sortOption !== "none" && (
        <CustomSelector
          classNameSelectorContainer="sorting-component__lable-container"
          labelSelector="Направление:"
          options={valueSortedList}
          valueSelector={sortOrder}
          handleChangeSelector={(e) => handleOrderChange(e.target.value)}
        />
      )}
    </StyledSortedContainer>
  );
};

export default SortingComponent;
