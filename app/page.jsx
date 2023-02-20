
import React from 'react';
import { Service } from './compornets/service';

export default  function page() {
  return (
  <>
    <section className="hero vh-100 d-flex align-items-center">
      <div className="container">
          <div className="title col-md-8">
            <h1>Not only work</h1>
            <h3>Lets hang out</h3>
          </div>
      </div>
    </section>      
    <Service/>
  </>
)
}

