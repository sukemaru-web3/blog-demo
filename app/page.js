"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  

  return (
    <main className={styles.main}>

      <h1>
        hello my site
      </h1>
      
    </main>
  )
}
