import Link from 'next/link';
import styles from './productCard.module.sass';
import Image from 'next/image';

export default function ProductCard({ id, name, description, image }) {
  // ProductCard should render a card with the following properties:
  // id, name, description and image
  return (
    <div className={styles.container}>
      <Link href={`/components/${id}`}>
        <div className={styles.imageContainer}>
          <Image src={image} alt={name} fill={true} className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </div>
  );
}