
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React from 'react';
import { client } from '@/libs/client';

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


export default function page({blog}) { 
  return(
    <div>
      <main className={styles.main}>
      <h1>My blog</h1>
      </main>
    </div>
  )
 
}