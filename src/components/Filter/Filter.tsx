import styles from "./Filter.module.css";

export interface FiltersProps {
  items: string[];
  handleClick: (p: string) => void;
}

export default function Filters({ items, handleClick }: FiltersProps) {
  return (
    <div className={styles.Filters}>
      <button
        className={`${styles.Button} type type--none`}
        onClick={() => handleClick("")}
      >
        All
      </button>
      {items.map((type) => (
        <button
          className={`${styles.Button} type type--${type}`}
          onClick={() => handleClick(type)}
          key={`filter-${type}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
