import styles from './page.module.sass';
import ProductScreenWithSearch from '../components/productScreenWithSearchbar/productScreenWithSearch.js';


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to the Component Library</h1>
      <p className={styles.description}>To use the component library click on the links below or browse from the menu above</p>
      <ProductScreenWithSearch />

    </main>
  )
}
