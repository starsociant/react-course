import { useState } from "react";
import { LoginModal } from "../LoginModal";
import styles from "./Header.module.css";

export interface HeaderProps {
  userName?: string;
}

export default function Header({ userName }: HeaderProps) {
  const [isLoginModalOpen, setModalLoginOpen] = useState(false);

  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <nav className={styles.Nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Types</a>
            </li>
          </ul>
        </nav>
        <div className={styles.LoginWrapper}>
          {userName ? (
            `Olá, ${userName}!`
          ) : (
            <button className={styles.LoginButton} onClick={() => setModalLoginOpen(true)}>Login</button>
          )}
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        handleClose={() => setModalLoginOpen(false)}
      />
    </header>
  );
}
