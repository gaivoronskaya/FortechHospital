import ModalForm from "../ModalForm";

const DeletingForm = ({
  closeModal,
  openModal,
  modalTitle,
  buttonTitle,
  handleDeleteAppointment,
}) => {
  return (
    <ModalForm
      closeModal={closeModal}
      openModal={openModal}
      modalTitle={modalTitle}
      buttonTitle={buttonTitle}
      handlePrimaryAction={handleDeleteAppointment}
    >
      <p>Вы действительно хотите удалить прием?</p>
    </ModalForm>
  );
};

export default DeletingForm;
