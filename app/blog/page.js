import Image from "next/image";
import styles from "./blog.module.css";
import React from "react";
import Link from "next/link";
import getData from "../hooks/getData";

export default async function page() {
  const datas = await getData();
  return (
    <main className={styles.main}>
      <h1> {datas.name}</h1>
      <h2>
        {" "}
        <Link href={`/static/${datas.name}`}>{datas.email}</Link>{" "}
      </h2>
    </main>
  );
}
