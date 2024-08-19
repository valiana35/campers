import ReactModal from "react-modal";
import { RxCross2 } from "react-icons/rx";

ReactModal.setAppElement("#root");

const CamperModal = ({ showModal, closeModal, children }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "15px",
      borderRadius: "20px",
      padding: "40px",
      width: "982px",
      height: "720px",
      zIndex: 1000,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      zIndex: 1000,
    },
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    padding: "0",
    margin: "0",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button type="button" onClick={closeModal} style={buttonStyle}>
        <RxCross2 />
      </button>
      {children}
    </ReactModal>
  );
};

export default CamperModal;
