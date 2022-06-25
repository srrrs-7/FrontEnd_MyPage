import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import { SearchQAState, SearchQAValueState } from '../../atom/atom';
import { QuestionState } from '../../atom/atomQuestion';
import { QList } from '../../axios/axios';
import { XIcon, TrashIcon } from '@heroicons/react/solid';
import {
  ExecQuestionCreateState,
  ExecQuestionDeleteState,
  QuestionDeleteState,
  SelectQuestionState,
} from '../../atom/atomQuestion';
import { PlusIcon } from '@heroicons/react/outline';

const useListQ = (pageID: number, pageSize: number) => {
  const { data, error } = useSWR<any>(`/q/list?page_id=${pageID}&page_size=${pageSize}`, QList, {
    refreshInterval: 10000,
  });
  return {
    questions: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const QA = () => {
  const [___, setSearchState] = useRecoilState(SearchQAState);
  const [searchValue, setSearchValue] = useRecoilState<string>(SearchQAValueState);
  const [____, setQ] = useRecoilState(QuestionState);
  const [QDelete, setQDelete] = useRecoilState(QuestionDeleteState);
  const [execQDelete, setExecQDelete] = useRecoilState(ExecQuestionDeleteState);
  const [execQCreate, setExecQCreate] = useRecoilState(ExecQuestionCreateState);
  const [_____, setSelectQ] = useRecoilState(SelectQuestionState);
  const [pageID, _] = useState<number>(1);
  const [pageSize, __] = useState<number>(1000);
  const router = useRouter();
  const { questions, isLoading: qLoading, isError: qError } = useListQ(pageID, pageSize);

  if (qLoading) {
    return <div>loading...</div>;
  }

  if (qError) {
    return <div>error</div>;
  }

  return (
    <>
      <div>
        <div className='flex justify-center pt-8'>
          <PlusIcon
            onClick={() => setExecQCreate(!execQCreate)}
            className='w-8 h-8 mr-5 items-center text-blue-500 cursor-pointer hover:bg-gray-200 rounded-3xl p-1'
          />
          <TrashIcon
            onClick={() => setQDelete(!QDelete)}
            className='w-8 h-8 mr-20 items-center text-red-500 cursor-pointer hover:bg-gray-200 rounded-3xl p-1'
          />
          <div className='mb-3'>
            <div className='input-group relative flex items-stretch w-3xl mb-4'>
              <input
                type='search'
                className='border border-blue-600 rounded-3xl form-control relative block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:outline-none focus:border-blue-600'
                placeholder='Search'
                value={searchValue}
                onChange={(e) => {
                  e.preventDefault();
                  setSearchValue(e.target.value);
                }}
              />
              <button
                className='rounded-3xl btn inline-block mx-4 px-2 py-2 border-2 border-blue-600 text-blue-600 font-lg text-xs leading-tight uppercase hover:bg-green-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                type='button'
                onClick={() => {
                  setSearchState(true);
                  router.push('/Qsearch');
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4'>
        {questions?.map((q: any) => (
          <div key={q.id} className='p-4'>
            {QDelete && (
              <div>
                <XIcon
                  onClick={() => {
                    setSelectQ(q.id);
                    setExecQDelete(!execQDelete);
                  }}
                  className='flex w-12 h-12 ml-auto pr-2 text-red-500 cursor-pointer'
                />
              </div>
            )}
            <div className='justify-center p-2 cursor-pointer' onClick={() => setQ(q)}>
              <Link href={`/QandA/${q.id}`}>
                <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gray-300'>
                  <h5 className='text-gray-900 text-xl leading-tight font-medium mb-2'>
                    QuestionID: {q.id}
                  </h5>
                  <p className='text-gray-700 text-base mb-4'>{q.text}</p>
                  <div>
                    <p className='text-gray-700 text-base mb-4'>
                      Please Click!! you see this question's answer
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QA;
