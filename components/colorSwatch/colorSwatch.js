"use client"

import styles from "./colorSwatch.module.sass"

export default function ColorSwatch({ updateState }) {
  const colors = {
    swatch1: "rgb(241, 108, 108)",
    swatch2: "rgb(111, 166, 248)",
    swatch3: "rgb(241, 241, 241)",
    swatch4: "rgb(57, 57, 57)",
    swatch5: "rgb(249, 238, 207)",
    swatch6: "rgb(100, 138, 80)",
  };

  function handleClick(event) {
    updateState(event.target.style.backgroundColor);
  }

  return (
    <div className={styles.colorBoard}>
      <button onClick={handleClick} className={styles.swatch1} style={{ backgroundColor: colors.swatch1 }}></button>
      <button onClick={handleClick} className={styles.swatch2} style={{ backgroundColor: colors.swatch2 }}></button>
      <button onClick={handleClick} className={styles.swatch3} style={{ backgroundColor: colors.swatch3 }}></button>
      <button onClick={handleClick} className={styles.swatch4} style={{ backgroundColor: colors.swatch4 }}></button>
      <button onClick={handleClick} className={styles.swatch5} style={{ backgroundColor: colors.swatch5 }}></button>
      <button onClick={handleClick} className={styles.swatch6} style={{ backgroundColor: colors.swatch6 }}></button>
    </div>
  )
}
