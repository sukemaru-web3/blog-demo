import React from "react";

export const Game = () => {
  return (
    <>
      <section
        className="game vh-100 bg-black  d-flex align-items-center"
        id="game"
      >
        <div className="  d-flex  justify-content-end m-3">
          <div className=" game_content  ">
            <div className="text-center   p-2 ">
              <h1>various tools</h1>
              <i className="bi bi-arrow-down-square fs-3"></i>

              <div className="game_card  p-3 d-flex justify-content-around">
                <div className=" game_text  col-md-5  ">
                  <h2>アナログゲーム</h2>
                  <div className="game_intro card card-effect  ">
                    <div className="mobile_box">
                      <h3>ドミニオン</h3>
                      <p>
                        カードのみで行うシンプルかつ奥深いゲーム。カードの効果を組み合わせ属州を集めよ
                      </p>
                    </div>
                    <img src="/karou.png" alt="" />
                  </div>
                </div>
                <div className=" game_text  col-md-5 ">
                  <h2>書籍</h2>
                  <div className="game_intro card card-effect  ">
                    <div className="mobile_box">
                      <h3>伝え方が9割</h3>
                      <p>
                        上司への報告も、頼み事をする時も、物を売る時もぜんぶ言い方一つですって
                      </p>
                    </div>
                    <img src="/karou.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
