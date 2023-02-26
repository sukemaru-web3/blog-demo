
import Image from 'next/image'
import React from 'react';
import toast from "../../image/frenchToast.jpg";
import room from "../../image/room.jpg";
import bg from "../../image/boardgame.jpg";

export const Service = () => {
    return (
        <>  
  <section className="service bg-light  " id='service'>
      <div className="container">
        <div className='row'>
          <div className='col-sm-7 mx-auto text-center my-4'>
            <h2 className='border-bottom border-black'>ご利用について</h2>
            <h3>今日は何する？？
            </h3>
          </div>
          <div className='row mt-3 '>

            <div className="col-md-4  p-4">
              <div className=" card card-effect text-center ">
                <img src="/frenchToast.jpg" className="card-img-top" />
                <div className='my-4 px-3'>
                  <h5>Coworking cafe</h5>
                  <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Repudiandae ducimus illo.</p>
                   <a className='btn btn-primary fs-4 '>詳しく</a>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-4">
              <div className=" card card-effect text-center ">
                <img src="/frenchToast.jpg" className="card-img-top" />
                <div className='my-4 px-3'>
                  <h5>Coworking cafe</h5>
                  <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Repudiandae ducimus illo.</p>
                   <a className='btn btn-primary fs-4 '>詳しく</a>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-4">
              <div className=" card card-effect text-center ">
                <img src="/frenchToast.jpg" className="card-img-top" />
                <div className='my-4 px-3'>
                  <h5>Coworking cafe</h5>
                  <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Repudiandae ducimus illo.</p>
                   <a className='btn btn-primary fs-4 '>詳しく</a>
                </div>
              </div>
            </div>
            
            

            
          </div>
        </div>
      </div>

    </section> 

      
    </>
  )}