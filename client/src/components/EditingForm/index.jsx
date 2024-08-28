import ModalForm from "../ModalForm";
import CustomInput from "../UI/CustomInput";
import CustomSelector from "../UI/CustomSelector";
import CustomTextArea from "../UI/CustomTextArea";
import { doctorsOptions } from "../../constants";
import { formatDate } from "../../helpers/formate-date";

const EditingForm = ({
  editedAppointment,
  handleChangeInput,
  closeModal,
  handleSubmit,
}) => {
  return (
    <ModalForm
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      modalTitle="Изменить прием"
      buttonTitle="Сохранить"
    >
      <CustomInput
        classNameInput="modal-form__input"
        label="Имя:"
        nameInput="name"
        valueInput={editedAppointment.name}
        handleChangeInput={handleChangeInput}
      />
      <CustomSelector
        labelSelector="Врач:"
        nameSelector="doctor"
        classNameSelector="modal-form__selector"
        valueSelector={editedAppointment.doctor}
        options={doctorsOptions}
      />
      <CustomInput
        classNameInput="modal-form__input"
        label="Дата:"
        nameInput="date"
        valueInput={formatDate(editedAppointment.date)}
        handleChangeInput={handleChangeInput}
      />
      <CustomTextArea
        textAreaLabel="Жалобы:"
        nameTextArea="complaint"
        valueTextArea={editedAppointment.complaint}
        handleChangeTextArea={handleChangeInput}
      />
    </ModalForm>
  );
};

export default EditingForm;
