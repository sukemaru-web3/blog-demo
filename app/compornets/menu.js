
import React from 'react';

export const Menu = () => {
    return (
        <>  
  <section className="menu" id='menu'>
    <div className='container'>  
      <div className="row"> 
        <div className="title w-auto col-sm-7 mx-auto text-center">
          <h2 className=' border-bottom border-black border-3 '>Menu book</h2>
        </div>  

        <div className='row menu_box my-4'>  
            <div className='box col-md-6 p-4 '>
               <img src="/menu_lunch.jpg"  />
                 <p>おすすめは手作りホワイトソースのドリア</p>
              </div>
             <div className='box col-md-6 p-4 '>
               <img src="/menu_drink.jpg" />
               
                 <p >ドリンクは20種類以上</p>
            </div>
        </div>
      </div>
    </div>
    
    
    
    
    </section> 

      
    </>
  )}