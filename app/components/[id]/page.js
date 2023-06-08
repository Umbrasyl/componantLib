import data from '../../../lib/readComponentLib.js';
import dynamic from 'next/dynamic';
import styles from "./page.module.sass"

export async function generateStaticParams() {
  // data is an array of objects with the following properties:
  // id, name, description and image
  return data.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });
}

export default function Page({ params }) {
  const CurrentComponent = dynamic(() => import(`../../../componentLib/${params.id}/${params.id}.js`));
  return (
    <div className={styles.center}>
      <CurrentComponent />
    </div>
  )
}