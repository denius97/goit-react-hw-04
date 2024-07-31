import Modal from "react-modal";
import css from "./ImageModal.module.css/";

Modal.setAppElement("#root");

const ImageModal = ({ closeModal, modalIsOpen, modalContent }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
    >
      <div>
        <img
          src={modalContent.urls.regular}
          alt={modalContent.alt_description}
        />
      </div>
      <p>
        {`Author: ${modalContent.user.name} | Likes: ${modalContent.likes}`}
      </p>
    </Modal>
  );
};

export default ImageModal;
