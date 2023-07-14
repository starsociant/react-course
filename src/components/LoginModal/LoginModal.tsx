import Modal from "react-modal";
import styles from "./Modal.module.css";

export interface LoginModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function PokemonModal({
  handleClose,
  isOpen = false,
}: LoginModalProps) {
  return (
    <div>
      <Modal
        style={{
          overlay: {
            zIndex: 9999,
          },
          content: {
            maxWidth: 500,
            margin: "auto",
            bottom: 'unset'
          },
        }}
        isOpen={isOpen}
        contentLabel="Login Modal"
      >
        <div className={styles.ModalHeader}>
          <h4>Login/Register</h4>
          <button onClick={handleClose}>&times;</button>
        </div>
        <div className={styles.ModalBody}>
          <form className={styles.Form}>
            <div className={styles.FormGroup}>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className={styles.FormGroup}>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className={styles.FormGroup}>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className={styles.FormGroup}>
              <button type="submit">JOIN</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
