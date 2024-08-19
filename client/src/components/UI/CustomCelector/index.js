import React from "react";
import { 
  StyledSelect, 
  StyledLabel, 
  StyledCelectContainer 
} from "./style";

const CustomCelector = ({
  valueCelect,
  nameCelect,
  onChangeonChangeSelect,
  children,
  labelOption,
  valueOption,
  labelCelector,
}) => (
  <StyledCelectContainer>
    {labelCelector && (
      <StyledLabel htmlFor={`select_${nameCelect}`}>
        {labelCelector}
      </StyledLabel>
    )}
    <StyledSelect
      value={valueCelect}
      name={nameCelect}
      onChange={onChangeonChangeSelect}
      id={`select_${nameCelect}`}
    >
      <option value={valueOption} disabled>
        {labelOption}
      </option>
      {children}
    </StyledSelect>
  </StyledCelectContainer>
);

export default CustomCelector;
