import { Dialog, Transition } from '@headlessui/react';
import { Router, useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import { ExecQuestionUpdateState, SelectQuestionState } from '../../atom/atomQuestion';
import { UpdateQ } from '../../axios/axios';

type QuestionUpdateModalProps = {
  q: any;
};

const QuestionUpdateModal: React.FC<QuestionUpdateModalProps> = ({ q }) => {
  const [id, _] = useRecoilState(SelectQuestionState);
  const [execQUpdate, setExecQUpdate] = useRecoilState(ExecQuestionUpdateState);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [text, setText] = useState<string>(q.text);
  const router = useRouter();
  const { data, mutate } = useSWR<any>(isUpdate && [`/q/update/${q.id}`, { text: text }], UpdateQ, {
    refreshInterval: 10000,
  });

  function closeModal() {
    setExecQUpdate(false);
  }

  function openModal() {
    setExecQUpdate(true);
  }

  useEffect(() => {
    if (isUpdate) {
      mutate({ ...data, text: text });
      setIsUpdate(false);
      setExecQUpdate(false);
    }
  }, [isUpdate, id, setIsUpdate]);

  return (
    <>
      <Transition appear show={execQUpdate} as={Fragment}>
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
                            <h1 className='text-3xl'>Update Question</h1>
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
                          <div className='md:flex md:items-center mt-8'>
                            <div className='md:w-1/3'></div>
                            <div className='md:w-2/3'>
                              <button
                                className='shadow bg-green-300 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                                type='button'
                                onClick={() => {
                                  setIsUpdate(true);
                                  router.push('/QandA');
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

export default QuestionUpdateModal;
