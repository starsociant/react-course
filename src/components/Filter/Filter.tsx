import styles from "./Filter.module.css";

export interface FiltersProps {
  items: string[];
  handleClick: (p: string) => void;
  typeStates: any;
}

export default function Filters({ items, handleClick, typeStates }: FiltersProps) {
  return (
    <div className={styles.Filters}>
      {items.map((type) => (
        <button
          className={`${styles.Button} type type--${type} ${typeStates[type] == 'on' ? 'active' : ''}`}
          onClick={() => handleClick(type)}
          key={`filter-${type}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
