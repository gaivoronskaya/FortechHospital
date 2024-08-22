import CustomButton from "../UI/CustomButton";
import CustomSelector from "../UI/CustomSelector";
import { doctorsOptions } from "../../constants";
import {
  StyledAppointmentContainer,
  StyledAppointmentInput,
  StyledShadow,
} from "./style";

const FormComponent = ({
  appointment,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
}) => {
  return (
    <StyledShadow>
      <StyledAppointmentContainer onSubmit={handleSubmit}>
        <StyledAppointmentInput
          label="Имя:"
          valueInput={appointment.name}
          typeInput="text"
          handleChangeInput={handleChangeInput}
          nameInput="name"
          error={error.name}
        />
        <CustomSelector
          labelSelector="Врач:"
          valueSelector={appointment.doctor}
          nameSelector="doctor"
          handleChangeSelector={handleChangeInput}
          options={doctorsOptions}
        >
        </CustomSelector>
        <StyledAppointmentInput
          label="Дата:"
          valueInput={appointment.date}
          typeInput="date"
          handleChangeInput={handleChangeInput}
          nameInput="date"
          error={error.date}
        />
        <StyledAppointmentInput
          label="Жалобы:"
          valueInput={appointment.complaint}
          handleChangeInput={handleChangeInput}
          typeInput="text"
          nameInput="complaint"
          error={error.complaints}
        />
        <CustomButton
          handleActionButton={handleActionButton}
          typeButton="submit"
          nameButton="mainNameButton"
          valueButton="mainValueButton"
        >
          Добавить
        </CustomButton>
      </StyledAppointmentContainer>
    </StyledShadow>
  );
};

export default FormComponent;
