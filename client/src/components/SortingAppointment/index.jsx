import CustomSelector from "../UI/CustomSelector";
import { sortedList, valueSortedList } from "../../constants";
import { StyledSortedContainer } from "./style";

const SortingComponent = ({
   sortOption,
   sortOrder, 
   handleSortInputChange, 
  }) => {
  return (
    <StyledSortedContainer>
      <CustomSelector
        labelSelector="Сортировать по:"
        options={sortedList}
        valueSelector={sortOption}
        handleChangeSelector={(e) =>
          handleSortInputChange(e.target.value, "option")
        }
        classNameSelectorContainer="sorting-appointment__lable-container"
      />
      {sortOption !== "none" && (
        <CustomSelector
          classNameSelectorContainer="sorting-appointment__lable-container"
          labelSelector="Направление:"
          options={valueSortedList}
          valueSelector={sortOrder}
          handleChangeSelector={(e) =>
            handleSortInputChange(e.target.value, "order")
          }
        />
      )}
    </StyledSortedContainer>
  );
};

export default SortingComponent;
