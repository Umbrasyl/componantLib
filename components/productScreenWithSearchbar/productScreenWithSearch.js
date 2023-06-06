import SearchBar from "./searchbar";
import ProductScreen from "./productScreen";
import styles from './productScreenWithSearch.module.sass';
import { getComponentMetadata } from "../../lib/readComponentLib";

// We should get a list of objects from the database. ProductScreenWithSearch should pass the list of objects to ProductScreen.
// ProductScreen should render the list of objects as a list of ProductCards.

export default async function ProductScreenWithSearch() {
  const products = await getComponentMetadata();
  return (
    <div className={styles.container}>
      <SearchBar />
      <ProductScreen products={products}/>
    </div>
  )
}