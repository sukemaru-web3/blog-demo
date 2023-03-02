
import React from 'react';

export const Game = () => {
    return (
        <>  
  <section className="game vh-100 bg-black  " id='game'>
    <div className="row game_content">
      <div className='text-center'>
        <h1>LetsPlay</h1>
      </div>
      <div className="game_card  p-5 col-md-4">
        <div className=" game_text  ">
          <h2>アナログゲーム紹介
          </h2>
          <div className='game_intro card card-effect  '>
            <h3>ドミニオン</h3>
            <p>カードのみで行うシンプルかつ奥深いゲーム。カードの効果を組み合わせ属州を集めよ</p>
            <img src="/karou.png" alt="" />
          </div>
        </div> 
      </div>
      
    </div>
          </section> 

      
    </>
  )}