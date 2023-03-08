export default async function getData() {
  const res = await fetch(`https://blog-page.microcms.io/api/v1/list`, {
    cache: "no-store",
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  });
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');}
  const datas = await res.json();
  return datas;
}

// export const getStaticProps = async () => {
//   const data = await client.get({
//     endpoint: 'blog',
//   });

//   return {
//     props: {
//       blog:data,
//     },
//   };
// };

// }export default function page({blog}) {
//   return(
//     <div>
//       <main className={styles.main}>
//       <h1>My blog</h1>
//       </main>
//     </div>
//   )

// }
