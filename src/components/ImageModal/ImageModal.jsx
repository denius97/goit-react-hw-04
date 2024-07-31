import Modal from "react-modal";
import css from "./ImageModal.module.css/";

Modal.setAppElement("#root");

const ImageModal = ({ closeModal, children, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      {/* <button type="button" onClick={closeModal} className={css.closeBtn}>
        Close
      </button> */}
      {children}
    </Modal>
  );
};

export default ImageModal;
