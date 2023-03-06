import React from "react";

export const Service = () => {
  return (
    <>
      <section className="service bg-light  " id="service">
        <div className="container">
          <div className="row">
            <div className="w-auto col-sm-7 mx-auto text-center my-4">
              <h2 className='" border-bottom border-black border-3'>
                How to use
              </h2>
            </div>
            <div className="row mt-3 ">
              <div className="col-md-4  p-4">
                <div className=" card card-effect text-center ">
                  <img src="/room.jpg" className="card-img-top" />
                  <div className="my-4 px-3">
                    <h5>Work / Study</h5>
                    <p>
                      時間を気にせず作業に集中
                      <br />
                      まるで実家にいるような感覚に
                    </p>
                    <a href="#work" className="btn btn-primary fs-4 ">
                      INFO
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4  p-4">
                <div className=" card card-effect text-center ">
                  <img src="/frenchToast.jpg" className="card-img-top" />
                  <div className="my-4 px-3">
                    <h5>Eat+Drink</h5>
                    <p>
                      ご飯？それともスイーツ？
                      <br />
                      美味しいものは心を元気にします
                    </p>
                    <a href="#menu" className="btn btn-primary fs-4 ">
                      Menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4  p-4">
                <div className=" card card-effect text-center ">
                  <img src="/boardgame.jpg" className="card-img-top" />
                  <div className="my-4 px-3">
                    <h5>Another</h5>
                    <p>
                      楽しみ方は人それぞれ
                      <br />
                      あなたの好きな使い方を見つけて
                    </p>
                    <a href="#game" className="btn btn-primary fs-4 ">
                      Whats?
                    </a>
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
