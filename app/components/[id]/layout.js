import styles from "./page.module.sass"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.colorBoard}>
        <button className={styles.swatch1}></button>
        <button className={styles.swatch2}></button>
        <button className={styles.swatch3}></button>
        <button className={styles.swatch4}></button>
        <button className={styles.swatch5}></button>
        <button className={styles.swatch6}></button>
      </div>
      <div className={styles.top}></div>
      <div className={styles.left}></div>
      {children}
      <div className={styles.right}></div>
      <div className={styles.bottom}></div>
    </div>
  )
}