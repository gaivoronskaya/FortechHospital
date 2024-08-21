import {
  StyledappointmentContainer,
  StyledappointmentInput,
  StyledappointmentButton,
} from "./style";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import CustomSelector from "../UI/CustomSelector";
import { doctorsOptions } from "../../constants";

const Appointment = ({
  appointmentForm,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
}) => {
  return (
    <StyledappointmentContainer onSubmit={handleSubmit}>
      <StyledappointmentInput
        label="Имя:"
        valueInput={appointmentForm.name}
        typeInput="text"
        handleChangeInput={handleChangeInput}
        nameInput="name"
        error={error.name}
      />
      <CustomSelector
        labelSelector="Врач:"
        valueSelector={appointmentForm.doctor}
        nameSelector="doctor"
        handleChangeSelector={handleChangeInput}
      >
        {doctorsOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CustomSelector>
      <StyledappointmentInput
        label="Дата:"
        valueInput={appointmentForm.date}
        typeInput="date"
        handleChangeInput={handleChangeInput}
        nameInput="date"
        error={error.date}
      />
      <StyledappointmentInput
        label="Жалобы:"
        valueInput={appointmentForm.complaint}
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
    </StyledappointmentContainer>
  );
};

export default Appointment;
