import React from "react";
import { Footer } from "./compornets/footer";
import { Game } from "./compornets/game";
import { Menu } from "./compornets/menu";
import { Price } from "./compornets/price";
import { Service } from "./compornets/service";
import { Work } from "./compornets/work";

export default function page() {
  return (
    <>
      <section className="hero vh-100 d-flex align-items-center" id="hero">
        <div className="container">
          <div className="title col-md-8 ">
            <h1 className="m-2">お仕事＋カフェ</h1>
            <h3>まるで実家な空間で時間を忘れて没頭しよう</h3>
          </div>
        </div>
      </section>
      <Service />
      <Work />
      <Menu />
      <Game />
      <Price />
      <Footer />
    </>
  );
}
