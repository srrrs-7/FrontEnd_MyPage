import React from 'react';

const Header = () => {
  return (
    <>
      <div className='flex bg-white h-20 items-center justify-center space-x-10'>
        {/* <a href='/blogs' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Blog
            </a>
            <a href='/QandA' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Q&A
            </a> */}
        <a href='/' className='text-base font-medium text-gray-500 hover:text-gray-900 z-50'>
          Skills
        </a>
        <a href='/profile' className='text-base font-medium text-gray-500 hover:text-gray-900 z-50'>
          Profile
        </a>
        <a href='/query' className='text-base font-medium text-gray-500 hover:text-gray-900 z-50'>
          Contact
        </a>
        {/* <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Sign in
            </a>
            <a
              href='#'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
            >
              Sign up
            </a> */}
      </div>
    </>
  );
};

export default Header;
