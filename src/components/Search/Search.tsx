import { useState } from "react";
import styles from "./Search.module.css";

export default function Search({ handleChange }: any) {

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
