import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import {
  StyledFormFilter,
  StyledContainer,
  StyletButtonsContainer,
  StyledButtonImage,
} from "./style";

const DataFilterForm = ({
  closeFilterForm,
  startDate,
  endDate,
  applyFilter,
  handleStartDateChange,
  handleEndDateChange,
}) => {
  return (
    <StyledContainer>
      <StyledFormFilter>
        <CustomInput
          classNameInputContainer="date-filter__lable-container"
          classNameInput="date-filter__inputs"
          typeInput="date"
          placeholder="Start Date"
          label="с:"
          value={startDate} 
          handleChangeInput={handleStartDateChange}
        />
        <CustomInput
          classNameInputContainer="date-filter__lable-container"
          classNameInput="date-filter__inputs"
          typeInput="date"
          placeholder="End Date"
          label="по:"
          value={endDate}
          handleChangeInput={handleEndDateChange}
        />
      </StyledFormFilter>
      <StyletButtonsContainer>
        <CustomButton
          className="date-filter__filter-button"
          typeButton="button"
          handleActionButton={() => applyFilter(startDate, endDate)}
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
    </StyledContainer>
  );
};

export default DataFilterForm;


