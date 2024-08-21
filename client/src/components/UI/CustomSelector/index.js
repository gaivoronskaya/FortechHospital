import { 
  StyledSelect, 
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
    <StyledSelect
      value={valueSelector}
      name={nameSelector}
      onChange={handleChangeSelector}
      id={`select_${nameSelector}`}
    >
      <option value={valueOption} disabled>
        {labelOption}
      </option>
      {children}
    </StyledSelect>
  </StyledCelectContainer>
);

export default CustomSelector;
