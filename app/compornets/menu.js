
import React from 'react';

export const Menu = () => {
    return (
        <>  
  <section className="menu bg-light" id='menu'>
    <div className='container'>  
      <div className="row"> 
        <div className="title mt-5 w-auto col-sm-7 mx-auto text-center">
          <h2 className=' border-bottom border-black border-3 '>Menu book</h2>
        </div>  

        <div className='row menu_box my-4 justify-content-around'>  
            <div className='box col-md-5 p-4 '>
               <img src="/menu_lunch.jpg"  />
            </div>
            <div className='box col-md-5 p-4 '>
               <img src="/menu_drink.jpg" />
            </div>
        </div>
      </div>
    </div>
    
    
    
    
    </section> 

      
    </>
  )}