'use client';

import Image from 'next/image';
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import './style.css'


import './globals.css'
import { useRouterUrl } from './hooks/useRouterUrl';
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function RootLayout({ children }) {
   


  const router = usePathname();
  const [pagename, setPagename] = useState();



  useEffect(() => {
      setPagename(router);

    console.log(router);
   
  }, [router]
  )
  
  
  

  // const  [style, setStyle] = useState(false);

  //   // const query = useSearchParams()
  //   const test =useEffect(() => {
  //     if(router==="/about"){
  //       setStyle(true); 
  //     }
  //     return(()=>{
  //       setStyle(false);
  //     })
  //   }, [router])

    // const {router, style, test} = useRouterUrl();
    // console.log(style)
    
    // const ref = useRef();
    const [toggle, setToggle] = useState(false);
    
    const handleClick = () => {
      setToggle(toggle === !true);
      // console.log(toggle);
    }

    const toggleCheck = toggle ? styles.open : "";


  return (
    <html lang="en" >
    
      <head />
      <body>
          {/* <button className={style ? styles.red : ""} >test</button> */}
      
       <nav className={styles.nav}>
        
          <Image
        className={styles.logo}
          src="/rogo.png"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
          />
      
        
        <ul className={`${styles.ul} ${toggle ? styles.active :""}`} onClick={handleClick}>
          <li className={pagename === "/" ? styles.current_page : ""}>
              <Link href="/">home
              </Link>
            </li>
            <li className={pagename === "/blog" ? styles.current_page : ""}>
              <Link href="/blog">blog
              </Link>
            </li >
            <li className={pagename === "/about" ? styles.current_page : ""}>
              <Link href="/about">about
              </Link>
            </li><li className={pagename === "/apps" ? styles.current_page : ""}>
              <Link href="/apps">apps
              </Link>
            </li>
         </ul>

         <div
          className={`${styles.hambagar} ${toggleCheck}`}  onClick={handleClick}>
          <div className={`${styles.line1} ${toggleCheck}`}></div>
          <div className={`${styles.line2} ${toggleCheck}`}></div>
          <div className={`${styles.line3} ${toggleCheck}`}></div>
         </div>

        </nav>
      
        {children}

        </body>
    </html>
  )
}
