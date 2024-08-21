import { 
  StyledSelector, 
  StyledLabel, 
  StyledCelectContainer 
} from "./style";

const CustomSelector = ({
  valueSelector,
  nameSelector,
  handleChangeSelector,
  children,
  labelOption,
  valueOption,
  labelSelector,
}) => (
  <StyledCelectContainer>
    {labelSelector && (
      <StyledLabel htmlFor={`select_${nameSelector}`}>
        {labelSelector}
      </StyledLabel>
    )}
    <StyledSelector
      value={valueSelector}
      name={nameSelector}
      onChange={handleChangeSelector}
      id={`select_${nameSelector}`}
    >
      <option value={valueOption} disabled>
        {labelOption}
      </option>
      {children}
    </StyledSelector>
  </StyledCelectContainer>
);

export default CustomSelector;
