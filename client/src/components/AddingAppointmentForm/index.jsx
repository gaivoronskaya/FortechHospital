import CustomButton from "../UI/CustomButton";
import CustomSelector from "../UI/CustomSelector";
import CustomInput from "../UI/CustomInput";
import { doctorsOptions } from "../../constants";
import { StyledAppointmentContainer, StyledAddAppointmentForm } from "./style";

const AddingAppointmentForm = ({
  appointment,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
}) => {
  return (
    <StyledAddAppointmentForm>
      <StyledAppointmentContainer onSubmit={handleSubmit}>
        <CustomInput
          label="Имя:"
          valueInput={appointment.name}
          typeInput="text"
          handleChangeInput={handleChangeInput}
          nameInput="name"
          error={error.name}
          classNameInput="adding-appointment-form__input"
        />
        <CustomSelector
          labelSelector="Врач:"
          valueSelector={appointment.doctor}
          nameSelector="doctor"
          handleChangeSelector={handleChangeInput}
          options={doctorsOptions}
          classNameSelector="adding-appointment-formm__selector"
        />
        <CustomInput
          label="Дата:"
          valueInput={appointment.date}
          typeInput="date"
          handleChangeInput={handleChangeInput}
          nameInput="date"
          error={error.date}
          classNameInput="adding-appointment-form__input"
        />
        <CustomInput
          label="Жалобы:"
          valueInput={appointment.complaint}
          handleChangeInput={handleChangeInput}
          typeInput="text"
          nameInput="complaint"
          error={error.complaints}
          classNameInput="adding-appointment-form__input"
        />
        <CustomButton
          classNameButton="adding-appointment-form__button"
          handleActionButton={handleActionButton}
          typeButton="submit"
          nameButton="mainNameButton"
          valueButton="mainValueButton"
        >
          Добавить
        </CustomButton>
      </StyledAppointmentContainer>
    </StyledAddAppointmentForm>
  );
};

export default AddingAppointmentForm;
