import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

function contact() {
  return (
    <>
      <div className='bg-orange-100 h-screen'>
        <div className='z-50'>
          <Header />
        </div>
        <div>
          <Footer />
        </div>

        <div className='mt-10'>
          <div>
            <div className='p-5 bg-orange-100 h-full'>
              <div className='flex justify-center'>
                <img src='profile2.jpg' alt='profile' width={300} className='rounded-l-3xl' />
                <div className='flex flex-col md:flex-row md:max-w-3xl rounded-r-3xl bg-white shadow-2xl'>
                  <div className='p-6 flex flex-col justify-start'>
                    <h5 className='flex justify-center text-gray-900 text-2xl font-serif'>
                      佐藤 亮介
                    </h5>
                    <h5 className='flex justify-center text-gray-900 text-3xl font-serif mb-10'>
                      RYOUSUKE SATOU
                    </h5>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - Tell : 090-2812-1814
                    </p>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - Mail : srrrs4510@gmail.com
                    </p>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      -work : freelance engineer
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
                      <p>
                        <Link href='https://github.com/sRRRs-7'>
                          <a>
                            <GitHubIcon className='text-4xl text-black cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
