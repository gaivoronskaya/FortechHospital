import ModalForm from "../ModalForm";

const DeletingForm = ({
  closeModal,
  openModal,
  handleDeleteAppointment,
}) => {
  return (
    <ModalForm
      closeModal={closeModal}
      openModal={openModal}
      modalTitle="Удалить прием"
      buttonTitle="удалить"
      handlePrimaryAction={handleDeleteAppointment}
    >
      <p>Вы действительно хотите удалить прием?</p>
    </ModalForm>
  );
};

export default DeletingForm;
