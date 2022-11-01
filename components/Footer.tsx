import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { FooterState } from '../atom/recoil';

function Footer() {
  const [title, setTitle] = useRecoilState(FooterState);

  useEffect(() => {
    let url = window.location.pathname;
    if (url === '/') {
      return setTitle('profile');
    } else {
      setTitle(url.replace('/', ''));
    }
  }, [title]);

  return (
    <>
      <div className='bg-gray-800 h-200 w-full'>
        <div className='text-white text-center text-xl font-mono p-32'>
          <h1 className='text-2xl'>{title}</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
