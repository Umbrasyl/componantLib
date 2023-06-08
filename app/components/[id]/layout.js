"use client"
import styles from "./page.module.sass"
import { useState } from "react";
import ColorSwatch from "../../../components/colorSwatch/colorSwatch";

export default function Layout({ children }) {
  const [bgColor, setBgColor] = useState("rgb(57, 57, 57)"); // colors.swatch4

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <ColorSwatch updateState={setBgColor} />
      <div className={styles.top}></div>
      <div className={styles.left}></div>
      {children}
      <div className={styles.right}></div>
      <div className={styles.bottom}></div>
    </div>
  )
}