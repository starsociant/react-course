import styles from "./Header.module.css";

export interface HeaderProps {
  userName?: string;
}

export default function Header({ userName }: HeaderProps) {
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
          {userName ? `Olá, ${userName}!` : <a href="#">Login</a>}
        </div>
      </div>
    </header>
  );
}
