import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.Search}>
      <input type="text" name="search" />
    </div>
  );
}
