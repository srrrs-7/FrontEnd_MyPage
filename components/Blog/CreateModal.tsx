import { Dialog, Transition } from '@headlessui/react';
import React, { useState, Fragment, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import { CreateBlog } from '../../axios/axios';
import { CreateModalState } from '../../atom/atom';

const CreateModal = () => {
  const [createModal, setCreateModal] = useRecoilState<boolean>(CreateModalState);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string | undefined>();
  const inputRef = useRef(null);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const { data: createData, mutate } = useSWR<any>(
    isCreate && [
      `/blog/create`,
      {
        title: title,
        text: text,
        image: image,
      },
    ],

    CreateBlog,
    {
      refreshInterval: 10000,
    },
  );

  function closeModal() {
    setCreateModal(false);
  }

  function openModal() {
    setCreateModal(true);
  }

  useEffect(() => {
    if (isCreate) {
      mutate({ ...createData, title: title, text: text, image: image });
      setIsCreate(false);
    }
  }, [isCreate, createModal]);

  return (
    <>
      <Transition appear show={createModal} as={Fragment}>
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div>
                    <div className='flex max-w-xl mx-auto justify-center rounded-3xl'>
                      <div className='p-10'>
                        <form className='w-full max-w-sm'>
                          <div className='flex pb-3 justify-center'>
                            <h1 className='text-3xl'>Create Blog</h1>
                          </div>
                          <div className='mb-8 xl:w-96'>
                            <label className='form-label inline-block mb-2 text-gray-700'>
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
                              <label className='form-label inline-block mb-2 text-gray-700'>
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
                                rows={3}
                                cols={35}
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
                              <label className='form-label inline-block mb-2 text-gray-700'>
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
                                  setImage(e.target?.files?.[0]?.name);
                                }}
                              />
                            </div>
                          </div>
                          <div className='md:flex md:items-center mt-8'>
                            <div className='md:w-1/3'></div>
                            <div className='md:w-2/3'>
                              <button
                                className='shadow bg-blue-300 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                                type='button'
                                onClick={() => {
                                  setIsCreate(true);
                                }}
                              >
                                Create
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

export default CreateModal;
