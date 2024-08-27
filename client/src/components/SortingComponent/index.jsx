import CustomSelector from "../UI/CustomSelector";
import { sortedList } from "../../constants";
import { valueSortedList } from "../../constants";
import { StyledSortedContainer } from "./style";

const SortingComponent = () => {
  return (
    <StyledSortedContainer>
      <CustomSelector labelSelector="Сортировать по:" options ={sortedList}/>
    </StyledSortedContainer>
  );
};

export default SortingComponent;
