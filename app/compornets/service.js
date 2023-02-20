
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
            <h2>ご利用について</h2>
          </div>
          <div className='row mt-4'>
            <div className="col-md-4 ">

              <div className=" card card-effect text-center">
                <Image src={room} alt="My avatar" />
                <div className='my-4 px-3'>
                  <h5>Coworking cafe</h5>
                  <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Repudiandae ducimus illo.</p>
                </div>
                <button className='btn btn-primary fs-4 m-3'>詳しく</button>
              </div>

            </div>
            <div className="col-md-4 ">

              <div className=" card card-effect text-center">
                <Image src={toast} alt="My avatar" />
                <div className='my-4 px-3'>
                  <h5>Coworking cafe</h5>
                  <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Repudiandae ducimus illo.</p>
                </div>
                <button className='btn btn-primary fs-4 m-3'>詳しく</button>
              </div>

            </div>
            <div className="col-md-4 ">

              <div className=" card card-effect text-center">
                <Image src={bg} alt="My avatar" />
                <div className='my-4 px-3'>
                  <h5>Coworking cafe</h5>
                  <p>Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Repudiandae ducimus illo.</p>
                </div>
                <button className='btn btn-primary fs-4 m-3'>詳しく</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section> 

      
    </>
  )}