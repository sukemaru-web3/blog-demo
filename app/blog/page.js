
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './blog.module.css'
import React from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


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

//上記書き換え
async function getData(){
  const res = await 
  fetch(`https://blog-page.microcms.io/api/v1/user`
  , {     cache: "no-store",  headers: 
    {"X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY},
});
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');}
  const datas  = await res.json();
  // console.log(datas);

  return datas;
}

export default async function page() { 
  const datas = await getData();
  return (
  <main className={styles.main}>
    <h1> {datas.name}</h1>
    <h2>  <Link href={`/static/${datas.name}`}>{datas.email}</Link> </h2>


 </main>
 
 
 )
 
  }