/*
import data from '../../../lib/readComponentLib.js';
import styles from "./page.module.sass"
import ComponentGetter from './componentGetter.js';

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
  return (
    <div className={styles.center}>
      <ComponentGetter componentId={params.id} />
    </div>
  )
}
*/
import data from '../../../lib/readComponentLib.js';
import styles from './page.module.sass';
import ComponentGetter from './componentGetter.js';


export default function ComponentPage({ params }) {
  "use client"
  const [ componentData ] = data.filter((item) => {
    return item.id === params.id;
  });

  return (
    <div className={styles.center}>
      <ComponentGetter componentData={componentData}/>
    </div>
    );
}




export async function generateStaticParams() {
  // data is an array of objects with the following properties:
  // id, name, description and image
  return data.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
}