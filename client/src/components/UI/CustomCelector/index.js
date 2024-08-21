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
  typeCelect,
  as: AsComponent = StyledSelect,
}) => (
  <StyledCelectContainer>
    {labelCelector && (
      <StyledLabel htmlFor={`select_${nameCelect}`}>
        {labelCelector}
      </StyledLabel>
    )}
    <AsComponent
      value={valueCelect}
      name={nameCelect}
      type={typeCelect}
      onChange={onChangeonChangeSelect}
      id={`select_${nameCelect}`}
    >
      <option value={valueOption} disabled>
        {labelOption}
      </option>
      {children}
    </AsComponent>
  </StyledCelectContainer>
);

export default CustomCelector;
