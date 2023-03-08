import React from "react";
import getData from "../hooks/getData";

export const Game = async () => {
  //   const [toggle, setToggle] = useState(false);
  // const handleClick = () => {
  //   setToggle(toggle === !true);
  // };
  // console.log(toggle);
  // const toggleCheck = toggle ? "d_none" : "";

  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const lists = await getData();
  //       setList(lists);
  //   };
  //   fetch();
  // }, []);

  const lists = await getData();
  const prop = [...lists.contents];
  const imgList = prop.map((img) => img.image);
  const ramdom = Math.floor(Math.random() * prop.length);

  // const prop = [...lists.contents];
  // const imgList = prop.map((img) => img.image);
  // const ramdom = Math.floor(Math.random() * prop.length);
  // const lists = await getData();
  // const prop = [...lists.contents];
  // const imgList = prop.map((img) => img.image);
  // console.log(imgList);
  // const idList = prop.map((obj) => obj.title);
  // console.log(idList[0]);

  // ランダムな記事番号生成

  return (
    <>
      <section
        className="game  bg-black  d-flex align-items-center justify-content-end"
        id="game"
      >
        <div className=" col-md-7  m-3">
          <div className=" game_content  ">
            <div className="text-center row  ">
              <h2>free tools</h2>
              <i className="bi bi-arrow-down-square fs-1"></i>

              <div className="game_box">
                <div className=" game_text col-md-5">
                  <h2>ボードゲーム</h2>

                  <div className="game_intro ">
                    <img className="" src={imgList[ramdom].url} alt="" />
                    <div className="mobile_box ">
                      <h3>{prop[ramdom].title}</h3>
                      <p>{prop[ramdom].discription}</p>
                    </div>
                  </div>
                </div>
                <div className=" game_text  col-md-5 ">
                  <h2>書籍</h2>
                  <div className="game_intro  ">
                    <img className="card-img-top " src="/book.jpg" alt="" />

                    <div className="mobile_box ">
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
