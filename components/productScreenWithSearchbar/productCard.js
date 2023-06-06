import styles from './productCard.module.sass';
import Image from 'next/image';

export default function ProductCard({ name, description, image }) {
  // ProductCard should render a card with the following properties:
  // id, name, description and image
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}