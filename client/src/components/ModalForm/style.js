import styled from "styled-components";

export const StyledModal = styled.div`
  min-width: 642px;
  min-height: 180px;
  background-color: #ffffff;
`;

export const StyledHeader = styled.header`
  width: 572px;
  margin-left: auto;
  margin-right: auto;
  height: 90px;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 36px;
`;

export const StyledFooter = styled.footer`
  width: 572px;
  margin-left: auto;
  margin-right: auto;
  height: 90px;
  box-shadow: 0 -4px 0 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

export const StyleButtonCancel = styled.button`
  width: 146px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid rgb(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const StyleСonfirmationButton = styled.button`
  width: 146px;
  height: 40px;
  background-color: #C5E9FF;
  border: 1px solid rgb(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const StyledModalForm = styled.form`
  width: 572px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const StyledModalInput = styled.input`
  width: 572px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 4px;
  padding-left: 10px;
`;

export const StyledModalCelector = styled.select`
  width: 572px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 4px;
  padding-left: 10px;
`;

