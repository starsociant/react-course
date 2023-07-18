import { useRef } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import styles from "./Modal.module.css";
import { login } from "../../redux/user/reducer";

export interface LoginModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function PokemonModal({
  handleClose,
  isOpen = false,
}: LoginModalProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = nameRef.current?.value!;
    const email = emailRef.current?.value!;
    dispatch(login({ name, email }));
    handleClose();
  };

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
            bottom: "unset",
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
          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.FormGroup}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                ref={nameRef}
                required
              />
            </div>
            <div className={styles.FormGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                ref={emailRef}
              />
            </div>
            <div className={styles.FormGroup}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={passRef}
                required
              />
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
