import { StyledSelector, StyledLabel, StyledSelectContainer } from "./style";

const CustomSelector = ({
  valueSelector,
  nameSelector,
  handleChangeSelector,
  options,
  labelOption,
  valueOption,
  labelSelector,
  classNameSelector,
  classNameSelectorContainer,
}) => (
  <StyledSelectContainer className={classNameSelectorContainer}>
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
      className={classNameSelector}
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
  </StyledSelectContainer>
);

export default CustomSelector;
