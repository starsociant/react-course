import styles from "./Footer.module.css";

export interface FooterProps {
  userName: string;
}

export default function Footer() {
  return <footer className={styles.Header}></footer>;
}
