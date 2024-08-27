import ModalForm from "../ModalForm";
import CustomInput from "../UI/CustomInput";
import CustomSelector from "../UI/CustomSelector";
import CustomTextArea from "../UI/CustomTextArea";
import { doctorsOptions } from "../../constants";
import { formatDate } from "../../helpers/formate-date";

const EditingForm = ({
  editAppointment,
  handleChangeInput,
  closeModal,
  openModal,
  handleSubmit,
}) => {
  return (
    <ModalForm
      closeModal={closeModal}
      openModal={openModal}
      handleSubmit={handleSubmit}
      modalTitle="Изменить прием"
      buttonTitle="Сохранить"
    >
      <CustomInput
        classNameInput="modal-form__input"
        label="Имя:"
        nameInput="name"
        valueInput={editAppointment.name}
        handleChangeInput={handleChangeInput}
      />
      <CustomSelector
        labelSelector="Врач:"
        nameSelector="doctor"
        classNameSelector="modal-form__selector"
        valueSelector={editAppointment.doctor}
        options={doctorsOptions}
      />
      <CustomInput
        classNameInput="modal-form__input"
        label="Дата:"
        nameInput="date"
        valueInput={formatDate(editAppointment.date)}
        handleChangeInput={handleChangeInput}
      />
      <CustomTextArea
        textAreaLabel="Жалобы:"
        nameTextArea="complaint"
        valueTextArea={editAppointment.complaint}
        handleChangeTextArea={handleChangeInput}
      />
    </ModalForm>
  );
};

export default EditingForm;
