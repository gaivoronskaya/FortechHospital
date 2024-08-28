
import CustomButton from "../UI/CustomButton";
import { StyledComponent, StyledTitle } from "./style";

const DateFilter = ({ openFilterForm }) => {
  return (
    <StyledComponent>
          <StyledTitle>Добавить фильтр по дате:</StyledTitle>
          <CustomButton
            classNameButton="date-filter__button"
            typeButton="button"
            nameButton="dateFilter"
            handleActionButton={openFilterForm}
          />
    </StyledComponent>
  );
};

export default DateFilter;
