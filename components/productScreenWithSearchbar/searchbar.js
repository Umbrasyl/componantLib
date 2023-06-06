import styles from './searchbar.module.sass';

const magGlassWidth = 30;

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input 
        className={styles.searchBar}
        type="search"
        placeholder="Search.."
        name="search" />
      <button type="submit" className={styles.submitButton}>
        <svg width={magGlassWidth} height={magGlassWidth} xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 19 19">
          <path d="M14.147 15.488a1.112 1.112 0 01-1.567 0l-3.395-3.395a5.575 5.575 0 111.568-1.568l3.394 3.395a1.112 1.112 0 010 1.568zm-6.361-3.903a4.488 4.488 0 10-1.681.327 4.443 4.443 0 001.68-.327z"></path>
        </svg>
      </button>
    </div>
  )
}