import React from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

function blogs() {
  return (
    <>
      <div className='bg-orange-100 h-full grid-cols-3 grid-flow-col'>
        <div className='z-50'>
          <Header />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <Blog />
        </div>
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
}

export default blogs;
