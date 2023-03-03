"use client";
import React, { useState } from "react";

export const Work = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(toggle === !true);
  };
  const toggleCheck = toggle ? "open" : "";

  return (
    <>
      <section className="work vh-100  " id="work">
        <div className="container">
          <div className="title px-3 text-end ">
            <h2 className="m-3">コワーキングスペース</h2>
            <p>仕事の打ち合わせや資格取得のために勉強する方など</p>
            <p>色んな業種・年齢の方々がいます</p>
          </div>
        </div>
        <div className="info d-flex justify-content-start ">
          {/* <div className="info_text"> */}
          <div
            onClick={handleClick}
            className="d-flex  circle_btn align-items-center justify-content-center"
          >
            <a className="fs-3 text-decoration-none text-white">Infomation</a>
          </div>
          <div className={"detail" + " " + toggleCheck}>
            <p className={toggleCheck}>
              【料金に含まれているサービス】
              <br />
              高速Wi-Fi/フリードリンク/各種コンセント/モニター/リングライト/ウェブカメラ/その他
            </p>
          </div>
        </div>
        {/* </div>      */}
      </section>
    </>
  );
};
