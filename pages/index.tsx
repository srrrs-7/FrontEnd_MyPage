import React, { useState } from 'react';
import Planet from '../3D/Planet';
import Header from '../components/Header';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Home = () => {
  const [show, setShow] = useState(false);
  let body = <></>;

  if (!show) {
    body = (
      <>
        <div className='flex justify-center my-64'>
          <PacmanLoader color={'green'} size={50} />
        </div>
      </>
    );
    setTimeout(() => {
      setShow(true);
    }, 2000);
  } else if (show) {
    body = (
      <>
        <div>
          <div className='top-0 z-50'>
            <Header />
          </div>
          <div>
            {/* <Three /> */}
            <Planet />
          </div>
        </div>
      </>
    );
  }

  return body;
};

export default Home;
