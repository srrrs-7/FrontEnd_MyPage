import React, { Fragment, useEffect, useRef, useState } from 'react';
import { UpdateBlog } from '../../axios/axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { UpdateModalState } from '../../atom/atom';
import { Dialog, Transition } from '@headlessui/react';

type BlogProps = {
  data: any;
};

const UpdateModal: React.FC<BlogProps> = ({ data }) => {
  const [updateModal, setUpdateModal] = useRecoilState<boolean>(UpdateModalState);
  const [title, setTitle] = useState<string>(data?.title);
  const [text, setText] = useState<string>(data?.text);
  const [image, setImage] = useState<string | undefined>(data?.image);
  const inputRef = useRef(null);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const router = useRouter();
  const { data: updateData, mutate } = useSWR<any>(
    isUpdate && [
      `/blog/update/${data.id}`,
      {
        title: title,
        text: text,
        image: image,
      },
    ],
    UpdateBlog,
    {
      refreshInterval: 10000,
    },
  );

  function closeModal() {
    setUpdateModal(false);
  }

  function openModal() {
    setUpdateModal(true);
  }

  useEffect(() => {
    if (isUpdate) {
      mutate({ ...updateData, title: title, text: text, image: image });
      setIsUpdate(false);
      setUpdateModal(false);
      router.push('/');
    }
  }, [isUpdate, data]);

  return (
    <>
      <Transition appear show={updateModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md bg-white text-left transition-all rounded-2xl'>
                  <div>
                    <div className='flex max-w-xl mx-auto py-10 justify-center rounded-3xl'>
                      <div className=''>
                        <form className='w-full max-w-sm'>
                          <div className='flex pb-3 justify-center'>
                            <h1 className='text-3xl'>Update</h1>
                          </div>
                          <div className='mb-8 xl:w-96'>
                            <label className='form-label inline-block mb-2 text-gray-700 text-xl'>
                              Title
                            </label>
                            <input
                              type='text'
                              className='
                                form-control
                                block
                                w-full
                                px-3
                                py-3
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                '
                              id='titleInput'
                              placeholder='Text input'
                              value={title}
                              onChange={(e) => {
                                e.preventDefault();
                                setTitle(e.target.value);
                              }}
                            />
                          </div>
                          <div className='flex justify-center'>
                            <div className='mb-8 xl:w-96'>
                              <label className='form-label inline-block mb-2 text-gray-700 text-xl'>
                                Text Input
                              </label>
                              <textarea
                                className='
                                  form-control
                                  block
                                  w-full
                                  py-3
                                  px-8
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded-3xl
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                '
                                id='textInput'
                                rows={7}
                                cols={40}
                                placeholder='Your message'
                                value={text}
                                onChange={(e) => {
                                  e.preventDefault();
                                  setText(e.target.value);
                                }}
                              ></textarea>
                            </div>
                          </div>
                          <div className='flex justify-center'>
                            <div className='mb-8 w-96'>
                              <label className='form-label inline-block mb-2 text-gray-700 text-xl'>
                                Image
                              </label>
                              <input
                                className='form-control
                                  block
                                  w-full
                                  px-3
                                  py-3
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                type='file'
                                ref={inputRef}
                                id='formFile'
                                onChange={(e) => {
                                  e.preventDefault();
                                  setImage(e.target.files?.[0].name);
                                }}
                              />
                            </div>
                          </div>
                          <div className='md:flex md:items-center mt-2'>
                            <div className='md:w-1/3'></div>
                            <div className='md:w-2/3'>
                              <button
                                className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                                type='button'
                                onClick={() => {
                                  setIsUpdate(true);
                                }}
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateModal;
