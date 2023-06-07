"use client"

import SearchBar from "./searchbar";
import ProductScreen from "./productScreen";
import styles from './productScreenWithSearch.module.sass';
import { useState } from "react";

// We should get a list of objects from the database. ProductScreenWithSearch should pass the list of objects to ProductScreen.
// ProductScreen should render the list of objects as a list of ProductCards.



export default function ProductScreenWithSearch({ productsInput }) {
  const [products, setProducts] = useState(productsInput);

  return (
    <div className={styles.container}>
      <SearchBar products={productsInput} handleProducts={setProducts}/>
      <ProductScreen products={products}/>
    </div>
  )
}