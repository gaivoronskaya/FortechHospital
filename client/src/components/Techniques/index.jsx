import {
  StyledappointmentContainer,
  StyledappointmentInput,
  StyledappointmentButton,
} from "./style";
import CustomSelector from "../UI/CustomSelector";

const Appointment = ({
  formData,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
}) => {
  const doctorsOptions = [
    { value: "doctor 1", label: "Врач 1" },
    { value: "Врач 2", label: "Врач 2" },
    { value: "Врач 3", label: "Врач 3" },
  ];
  return (
    <StyledappointmentContainer onSubmit={handleSubmit}>
      <StyledappointmentInput
        label="Имя:"
        valueInput={formData.name}
        typeInput="text"
        handleChangeInput={handleChangeInput}
        nameInput="name"
        error={error.name}
      />
      <CustomSelector
        labelSelector="Врач:"
        valueCelect={formData.doctor}
        nameCelect="doctor"
        onChangeonChangeSelect={handleChangeInput}
      >
        {doctorsOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CustomSelector>
      <StyledappointmentInput
        label="Дата:"
        valueInput={formData.date}
        typeInput="date"
        handleChangeInput={handleChangeInput}
        nameInput="date"
        error={error.date}
      />
      <StyledappointmentInput
        label="Жалобы:"
        valueInput={formData.complaint}
        handleChangeInput={handleChangeInput}
        typeInput="text"
        nameInput="complaint"
        error={error.complaints}
      />
      <StyledappointmentButton
        handleActionButton={handleActionButton}
        typeButton="submit"
        nameButton="mainNameButton"
        valueButton="mainValueButton"
      >
        Добавить
      </StyledappointmentButton>
    </StyledappointmentContainer>
  );
};

export default Appointment;
