import React from 'react';
import Scroll from '../3D/Scroll';
import Troika from '../3D/Troika';
import Header from '../components/Header';

const three = () => {
  return (
    <>
      <div className='z-50'>
        <Header />
      </div>
      <div>
        {/* <Troika /> */}
        <Scroll />
      </div>
    </>
  );
};

export default three;
