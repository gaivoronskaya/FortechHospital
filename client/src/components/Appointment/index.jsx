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
  appointmentDataModalWindow,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
}) => {
  return (
    <StyledappointmentContainer onSubmit={handleSubmit}>
      <StyledappointmentInput
        label="Имя:"
        valueInput={appointmentDataModalWindow.name}
        typeInput="text"
        handleChangeInput={handleChangeInput}
        nameInput="name"
        error={error.name}
      />
      <CustomSelector
        labelSelector="Врач:"
        valueSelector={appointmentDataModalWindow.doctor}
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
        valueInput={appointmentDataModalWindow.date}
        typeInput="date"
        handleChangeInput={handleChangeInput}
        nameInput="date"
        error={error.date}
      />
      <StyledappointmentInput
        label="Жалобы:"
        valueInput={appointmentDataModalWindow.complaint}
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
