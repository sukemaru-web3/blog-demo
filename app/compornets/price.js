import React from "react";

export const Price = () => {
  return (
    <section className="price " id="price">
      <div className="container">
        <div className="row my-3">
          <div className="price_title  d-flex justify-content-center">
            <div className=" p-3 col-sm-8  text-white text-center my-4">
              <h1>料金</h1>
            </div>
          </div>
          <div className="price_list d-flex justify-content-around ">
            <div className="price_card bg-light  p-4  col-md-4  ">
              <h2>時間料金(11-18)</h2>
              <p>1F 250円/30分</p>
              <p>2F 270円/30分</p>
              <p>土日 300円/30分</p>
            </div>
            <div className="price_card bg-light  p-4 col-md-4 ">
              <h2>1日料金(11-18)</h2>
              <p>1F 1800円</p>
              <p>2F 2000円</p>
              <p>土日 2400円</p>
            </div>
          </div>
          <div className="price_title  d-flex justify-content-center">
            <div className=" p-3 col-sm-7  text-white text-center my-4">
              <h2>※18時以降のご利用について</h2>
              <div>
                <p>
                  18時で一旦時間利用はリセットされ、カフェレストランへと営業形態が変わります。
                  <br />
                  詳しくはLINEにて
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
