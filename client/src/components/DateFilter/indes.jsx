import DataFilterForm from "../DataFilterForm";
import CustomButton from "../UI/CustomButton";
import { StyledComponent, StyledTitle } from "./style";

const DateFilter = ({ openFilterForm, closeFilterForm }) => {
  return (
    <StyledComponent>
      {!openFilterForm ? (
        <>
          <StyledTitle>Добавить фильтр по дате:</StyledTitle>
          <CustomButton
            classNameButton="date-filter__button"
            typeButton="button"
            nameButton="dateFilter"
            handleActionButton={openFilterForm}
          />
        </>
      ) : (
        <DataFilterForm closeFilterForm={closeFilterForm}/>
      )}
    </StyledComponent>
  );
};

export default DateFilter;
