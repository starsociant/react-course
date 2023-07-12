import styles from "./Search.module.css";

interface SearchProps {
  handleChange: (p: string) => void;
}

export default function Search({ handleChange }: SearchProps) {
  return (
    <div className={styles.Search}>
      <input
        type="text"
        name="pokemon-types"
        onChange={(event) => handleChange(event?.target?.value)}
      />
    </div>
  );
}
