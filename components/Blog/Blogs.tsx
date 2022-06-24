import React, { useEffect, useState } from 'react';
import { BlogList } from '../../axios/axios';
import useSWR from 'swr';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { BlogState, CreateModalState } from '../../atom/atom';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const useBlogs = (pageID: number, pageSize: number) => {
  const { data, error } = useSWR<any>(
    `/blog/list?page_id=${pageID}&page_size=${pageSize}`,
    BlogList,
    {
      refreshInterval: 10000,
    },
  );
  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Blogs = () => {
  const [createModal, setCreateModal] = useRecoilState<boolean>(CreateModalState);
  const [_, setBlogState] = useRecoilState(BlogState);
  const [isGet, setIsGet] = useState(false);
  const [pageID, setPageID] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);
  const router = useRouter();
  const { blogs, isLoading, isError, mutate }: any = useBlogs(pageID, pageSize);

  useEffect(() => {
    if (isGet) {
      mutate(...blogs);
      setIsGet(false);
      router.push('/');
    }
  }, [isGet, pageID, blogs, isLoading]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div>
      <div className='grid lg:grid-cols-4 md:grid-cols-4 space-x-3 space-y-2 items-center justify-center p-12 bg-blue-100'>
        {blogs?.map((b: any) => (
          <div
            key={b.id}
            className='flex hover:bg-gray-400 max-w-sm max-h-sm rounded-3xl transition ease-in-out cursor-pointer'
            onClick={() => setBlogState(b)}
          >
            <Link href='/blog'>
              <a>
                <div className='max-w-sm overflow-hidden shadow-xl p-6 rounded-3xl'>
                  <img className='w-full object-fit' src='/Go-Logo_Blue.webp' alt='icon or image' />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>
                      <h1 className='text-3xl truncate'>{b.title}</h1>
                    </div>
                    <p className='text-gray-700 text-base truncate'>{b.text}</p>
                    <p className='text-gray-700 text-base truncate'>{b.id}</p>
                  </div>
                  <div className='px-6 pt-4 pb-2'>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                      #photography
                    </span>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                      #travel
                    </span>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                      #winter
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
        <div className='fixed bottom-0 right-0 py-4 px-24 rounded-full'>
          <div>
            <PlusCircleIcon
              color={'blue'}
              width={120}
              height={120}
              className='opacity-50 hover:bg-green-500 rounded-full z-30'
              onClick={() => setCreateModal(!createModal)}
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pt-8 pb-24 lg:px-0 sm:px-6 px-18 bg-blue-100'>
        <div className='lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200'>
          <div
            className='flex items-center pt-1 text-gray-600 hover:text-indigo-700 cursor-pointer'
            onClick={() => {
              if (pageID > 1) {
                setPageID(pageID - 1);
              }
            }}
          >
            <p className='text-sm ml-3 font-medium leading-none '>Previous</p>
          </div>
          <div className='sm:flex hidden'>
            <p
              onClick={() => {
                setPageID(1);
              }}
              className={
                pageID === 1
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              1
            </p>
            <p
              onClick={() => {
                setPageID(2);
              }}
              className={
                pageID === 2
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              2
            </p>
            <p
              onClick={() => {
                setPageID(3);
              }}
              className={
                pageID === 3
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              3
            </p>
            <p
              onClick={() => {
                setPageID(4);
              }}
              className={
                pageID === 4
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              4
            </p>
            <p
              onClick={() => {
                setPageID(5);
              }}
              className={
                pageID === 5
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              5
            </p>
            <p
              onClick={() => {
                setPageID(6);
              }}
              className={
                pageID === 6
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              6
            </p>
            <p
              onClick={() => {
                setPageID(7);
              }}
              className={
                pageID === 7
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              7
            </p>
            <p
              onClick={() => {
                setPageID(8);
              }}
              className={
                pageID === 8
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              8
            </p>
            <p
              onClick={() => {
                setPageID(9);
              }}
              className={
                pageID === 9
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              9
            </p>
            <p
              onClick={() => {
                setPageID(10);
              }}
              className={
                pageID === 10
                  ? 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent border-indigo-400 pt-3 mr-4 px-3'
                  : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
              }
            >
              10
            </p>
          </div>
          <div className='flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer'>
            <p
              className='text-sm font-medium leading-none mr-3'
              onClick={() => {
                if (pageID < 10) {
                  setPageID(pageID + 1);
                }
              }}
            >
              Next
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
