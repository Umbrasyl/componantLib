import styles from './productScreen.module.sass';
import ProductCard from './productCard';

export default function ProductScreen({ products }) {
  // products is an array of objects with the following properties:
  // id, name, description and image
  console.log(products);
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            // image={product.image}
          />
        );
      })}
    </div>
  );
}