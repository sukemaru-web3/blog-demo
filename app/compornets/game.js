import React from "react";

export const Game = () => {
  return (
    <>
      <section
        className="game vh-100 bg-black  d-flex align-items-center justify-content-end"
        id="game"
      >
        <div className=" col-md-7  m-3">
          <div className=" game_content  ">
            <div className="text-center row  ">
              <h2>free tools</h2>
              <i className="bi bi-arrow-down-square fs-1"></i>

              <div className="game_box">
                <div className=" game_text  col-md-5 ">
                  <h2>ボードゲーム</h2>
                  <div className="game_intro board card card-effect  ">
                    <img className="card-img-top" src="/karou.png" alt="" />
                    <div className="mobile_box">
                      <h3>ドミニオン</h3>
                      <p>
                        カードのみで行うシンプルかつ奥深いゲーム。カードの効果を組み合わせ属州を集めよ
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" game_text book col-md-5 ">
                  <h2>書籍</h2>
                  <div className="game_intro card card-effect  ">
                    <img className="card-img-top" src="/karou.png" alt="" />

                    <div className="mobile_box">
                      <h3>伝え方が9割</h3>
                      <p>
                        上司への報告も、頼み事をする時も、物を売る時もぜんぶ言い方一つですって
                      </p>
                    </div>
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
