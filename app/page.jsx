
import React from 'react';
import { Service } from './compornets/service';

export default  function page() {
  return (
  <>
    <section className="hero  d-flex align-items-center">
      <div className="container">
          <div className="title col-md-8">
            <h1 >nook in</h1>
            <h3>most loose coworking</h3>
          </div>
      </div>
    </section>      
    <Service/>
  </>
)
}

