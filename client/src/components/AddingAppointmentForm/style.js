import styled from "styled-components";

export const StyledAddAppointmentForm = styled.div`
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2);
`;

export const StyledAppointmentContainer = styled.form`
  width: 989px;
  height: 122px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;

  .adding-appointment-form__input,
  .adding-appointment-form__selector {
    width: 188px;
    height: 45px;
  }

  .adding-appointment-form__button {
    width: 131px;
    height: 45px;
    margin-top: 10px;
  }
`;
