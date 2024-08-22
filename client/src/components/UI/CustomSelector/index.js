import { StyledSelector, StyledLabel, StyledCelectContainer } from "./style";

const CustomSelector = ({
  valueSelector,
  nameSelector,
  handleChangeSelector,
  options,
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
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelector>
  </StyledCelectContainer>
);

export default CustomSelector;
