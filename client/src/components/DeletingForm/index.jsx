import ModalForm from "../ModalForm";

const DeletingForm = ({ closeModal, handleDeleteAppointment }) => {
  return (
    <ModalForm
      closeModal={closeModal}
      modalTitle="Удалить прием"
      buttonTitle="удалить"
      handlePrimaryAction={handleDeleteAppointment}
    >
      <p>Вы действительно хотите удалить прием?</p>
    </ModalForm>
  );
};

export default DeletingForm;
