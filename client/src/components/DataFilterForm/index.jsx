import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import {
  StyledFormFilter,
  StyledContainer,
  StyletButtonsContainer,
  StyledButtonImage,
} from "./style";

const DataFilterForm = ({ closeFilterForm }) => {
  return (
    <StyledContainer>
      <StyledFormFilter>
        <CustomInput
          classNameInputContainer="date-filter__lable-container"
          classNameInput="date-filter__inputs"
          typeInput="date"
          placeholder="Start Date"
          label="с:"
        />
        <CustomInput
          classNameInputContainer="date-filter__lable-container"
          classNameInput="date-filter__inputs"
          typeInput="date"
          placeholder="End Date"
          label="по:"
        />
      </StyledFormFilter>
      <StyletButtonsContainer>
        <CustomButton
          className="date-filter__filter-button"
          typeButton="button"
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
