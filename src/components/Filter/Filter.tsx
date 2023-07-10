import styles from './Filter.module.css';

export interface FiltersProps {
  items: string[];
}

export default function Filters({ items }: FiltersProps) {
  const filter = (p: string) => console.log(p);
  return (
    <div className={styles.Filters}>
      {items.map((type) => (
        <button className={`${styles.Button} type type--${type}`} onClick={() => filter(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}
