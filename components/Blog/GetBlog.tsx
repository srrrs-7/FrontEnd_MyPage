import React, { useState } from 'react';
import { GetBlog } from '../../axios/axios';
import useSWR from 'swr';
import { DeleteModalState, UpdateModalState } from '../../atom/atom';
import { useRecoilState } from 'recoil';
import moment from 'moment';

const useGetBlog = (id: number) => {
  const { data, error } = useSWR<any>(`/blog/get/${id}`, GetBlog, {
    refreshInterval: 10000,
  });
  return {
    blog: data,
    isLoading: !error && !data,
    isError: error,
  };
};

type BlogProps = {
  data: any;
};

const GetBlogPage: React.FC<BlogProps> = ({ data }) => {
  const { blog, isLoading, isError } = useGetBlog(data.id);
  const [_, setUpdateModal] = useRecoilState(UpdateModalState);
  const [__, setDeleteModal] = useRecoilState(DeleteModalState);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      <div>
        <div className='p-8 m-8'>
          <div className='grid items-center justify-center'>
            <div className='grid justify-center md:flex-row rounded-lg shadow-lg bg-gray-200 p-10'>
              <img
                className='w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
                src='/golang.png'
                alt=''
              />
              <div>
                <div className='p-8 flex flex-col justify-start'>
                  <h1 className='text-gray-900 text-3xl font-medium mb-2'>{blog.title}</h1>
                  <p className='text-gray-700 mb-4 text-xl pt-6'>{blog.text}</p>
                  <div className='pt-5'>
                    <p className='text-gray-600 text-xl'>
                      {moment(blog.created_at).format('LLLL')}
                    </p>
                    <p className='text-gray-600 text-xl'>{blog.id}</p>
                  </div>
                </div>
                <div className='flex p-2'>
                  <div className='p-3 ml-auto'>
                    <button
                      className='shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                      type='button'
                      onClick={() => {
                        setUpdateModal(true);
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div className='p-3 mr-8'>
                    <button
                      className='shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                      type='button'
                      onClick={() => {
                        setDeleteModal(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetBlogPage;
