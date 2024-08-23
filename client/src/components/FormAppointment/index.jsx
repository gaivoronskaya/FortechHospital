import CustomButton from "../UI/CustomButton";
import CustomSelector from "../UI/CustomSelector";
import CustomInput from "../UI/CustomInput";
import { doctorsOptions } from "../../constants";
import { StyledAppointmentContainer, StyledShadow } from "./style";

const FormAppointment = ({
  appointment,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
}) => {
  return (
    <StyledShadow>
      <StyledAppointmentContainer onSubmit={handleSubmit}>
        <CustomInput
          label="Имя:"
          valueInput={appointment.name}
          typeInput="text"
          handleChangeInput={handleChangeInput}
          nameInput="name"
          error={error.name}
          classNameInput="form-appointment__input"
        />
        <CustomSelector
          labelSelector="Врач:"
          valueSelector={appointment.doctor}
          nameSelector="doctor"
          handleChangeSelector={handleChangeInput}
          options={doctorsOptions}
          classNameSelector="form-appointment__selector"
        />
        <CustomInput
          label="Дата:"
          valueInput={appointment.date}
          typeInput="date"
          handleChangeInput={handleChangeInput}
          nameInput="date"
          error={error.date}
          classNameInput="form-appointment__input"
        />
        <CustomInput
          label="Жалобы:"
          valueInput={appointment.complaint}
          handleChangeInput={handleChangeInput}
          typeInput="text"
          nameInput="complaint"
          error={error.complaints}
          classNameInput="form-appointment__input"
        />
        <CustomButton
          classNameButton="form-appointment__button"
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

export default FormAppointment;
