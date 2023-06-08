import dynamic from "next/dynamic";

export default function ComponentGetter({ componentData }) {
  const CurrentComponent = dynamic(() => import(`../componentLib/${componentData.id}/${componentData.id}.js`), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });
  console.log(CurrentComponent);
  return (
    <CurrentComponent />
  )
}