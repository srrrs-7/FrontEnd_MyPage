import React from 'react';
import Header from '../components/Header';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { EmailModalState } from '../atom/atomEmail';
import EmailModal from '../components/EmailModal';

type Props = {};

const query = (props: Props) => {
  const [_, setIsOpen] = useRecoilState(EmailModalState);

  return (
    <div className='bg-orange-300 h-screen'>
      <Header />
      <div className='mt-32 bg-orange-300 h-full'>
        <div className='flex justify-center'>
          <div className='flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl'>
            <img
              className=' w-full h-96 md:h-auto object-cover md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg'
              src='/profile2.jpg'
              alt=''
            />
            <div className='p-6 flex flex-col justify-start'>
              <h5 className='flex justify-center text-gray-900 text-2xl font-medium mb-8'>
                Ryousuke Satou
              </h5>
              <p className='text-gray-700 text-base mb-4 font-serif'>
                I'm Full Stack Engineer lived in Hokkaido.
              </p>
              <p className='text-gray-700 text-base mb-4 font-serif'>
                Main language is Golang, JavaScript, Node.js and PostgreSQL
              </p>
              <p className='text-gray-700 text-base mb-4 font-serif'>
                And I can operate 3D Graphics with Blender.
              </p>
              <p className='text-gray-700 text-base mb-4 font-serif'>
                I create WEB applications, Games, 3D model and Edit Movie.
              </p>
              <p className='text-gray-700 text-base mb-4 font-serif'>
                If you interested in me, Please send me a message!!
              </p>
              <div className='flex ml-auto p-2 mt-8 space-x-5'>
                <p>
                  <Link href='https://www.youtube.com/channel/UC-F1geS98nNWsD2z3aj7XAw'>
                    <a>
                      <YouTubeIcon className='text-4xl text-red-600 cursor-pointer' />
                    </a>
                  </Link>
                </p>
                <p>
                  <Link href='https://twitter.com/sRRRs45'>
                    <a>
                      <TwitterIcon className='text-4xl text-blue-300 cursor-pointer' />
                    </a>
                  </Link>
                </p>
                <p>
                  <Link href='https://www.facebook.com/profile.php?id=100008637453334'>
                    <a>
                      <FacebookIcon className='text-4xl text-blue-800 cursor-pointer' />
                    </a>
                  </Link>
                </p>
                <p>
                  <Link href='https://www.instagram.com/srrrs007/'>
                    <a>
                      <InstagramIcon className='text-4xl text-orange-500 cursor-pointer' />
                    </a>
                  </Link>
                </p>
                <div>
                  <button onClick={() => setIsOpen(true)}>
                    <AlternateEmailIcon className='text-4xl text-red-800 cursor-pointer' />
                    <EmailModal />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default query;
