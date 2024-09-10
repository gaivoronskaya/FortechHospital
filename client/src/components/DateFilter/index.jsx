import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import {
  StyledFormFilter,
  StyledContainer,
  StyletButtonsContainer,
  StyledButtonImage,
  StyledComponent,
  StyledTitle,
} from "./style";

const DateFilter = ({
  applyFilter,
  dateRange,
  handleDateChange,
  isOpenFilterForm,
  openFilterForm,
  closeFilterForm,
}) => {
  return (
    <StyledContainer>
      {isOpenFilterForm ? (
        <StyledFormFilter>
          <CustomInput
            classNameInputContainer="date-filter__label-container"
            classNameInput="date-filter__inputs"
            typeInput="date"
            placeholder="Start Date"
            label="с:"
            value={dateRange.start}
            handleChangeInput={(e) => handleDateChange(e, "start")}
          />
          <CustomInput
            classNameInputContainer="date-filter__label-container"
            classNameInput="date-filter__inputs"
            typeInput="date"
            placeholder="End Date"
            label="по:"
            value={dateRange.end}
            handleChangeInput={(e) => handleDateChange(e, "end")}
          />
          <StyletButtonsContainer>
            <CustomButton
              className="date-filter__filter-button"
              typeButton="button"
              handleActionButton={applyFilter}
            >
              Фильтровать
            </CustomButton>
            <CustomButton
              classNameButton="date-filter__cancel-button"
              typeButton="button"
              handleActionButton={closeFilterForm}
            >
              <StyledButtonImage />
            </CustomButton>
          </StyletButtonsContainer>
        </StyledFormFilter>
      ) : (
        <StyledComponent>
          <StyledTitle>Добавить фильтр по дате:</StyledTitle>
          <CustomButton
            classNameButton="date-filter__button"
            typeButton="button"
            nameButton="dateFilter"
            handleActionButton={openFilterForm}
          />
        </StyledComponent>
      )}
    </StyledContainer>
  );
};

export default DateFilter;
