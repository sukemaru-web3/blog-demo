"use client";

import styles from "./page.module.css";
import { usePathname, useSearchParams } from "next/navigation";

export default function blog() {
  const router = usePathname();

  return (
    <main className={styles.main}>
      <h1>hello my {router.slice(1)} page</h1>
      {/* <button onClick={console.log(style)}>test</button> */}
    </main>
  );
}
