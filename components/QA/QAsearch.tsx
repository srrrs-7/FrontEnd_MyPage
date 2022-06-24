import { XIcon, TrashIcon, PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useSWR, { mutate } from 'swr';
import { SearchQAState, SearchQAValueState } from '../../atom/atom';
import { QuestionState } from '../../atom/atomQuestion';
import { SelectQuestionState } from '../../atom/atomQuestion';
import { QSearch } from '../../axios/axios';

const useQSearch = (value: string) => {
  const { data, error, mutate } = useSWR<any>(`q/search?search_value=${value}%25`, QSearch, {
    refreshInterval: 10000,
  });
  return {
    qSearch: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
};

type QAsearch = {
  value: string;
};

const QAsearch: React.FC<QAsearch> = ({ value }) => {
  const [searchState, setSearchState] = useRecoilState(SearchQAState);
  const [searchValue, setSearchValue] = useRecoilState(SearchQAValueState);
  const [__, setQ] = useRecoilState(QuestionState);
  const [___, setSelectQ] = useRecoilState(SelectQuestionState);
  const v = searchValue === '' ? value : searchValue;
  const { qSearch, isLoading, isError }: any = useQSearch(v);

  useEffect(() => {
    if (searchState) {
      mutate(qSearch);
      setSearchState(false);
    }
  }, [searchState]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      <div>
        <div className='flex justify-center pt-8'>
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
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4'>
        {qSearch?.map((q: any) => (
          <div key={q.id} className='p-4'>
            <div className='justify-center p-2 cursor-pointer' onClick={() => setQ(q)}>
              <Link href={`/answerPage`}>
                <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-gray-300'>
                  <h5 className='text-gray-900 text-xl leading-tight font-medium mb-2'>
                    QuestionID: {q.id}
                  </h5>
                  <p className='text-gray-700 text-3xl mb-4'>{q.text}</p>
                  <div>
                    <p className='text-gray-700 text-base mb-4'>
                      Please Click!! when you see this question's answer
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

export default QAsearch;
