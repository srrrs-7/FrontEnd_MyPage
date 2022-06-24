import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import { AnswerDeleteState, AnswerUpdateState } from '../../atom/atomAnswer';
import { AList } from '../../axios/axios';
import moment from 'moment';
import { ExecQuestionUpdateState } from '../../atom/atomQuestion';
import { PencilIcon } from '@heroicons/react/outline';

const useAList = (qid: number, pageID: number, pageSize: number) => {
  const { data, error } = useSWR<any>(
    `a/list?answer_id=${qid}&page_id=${pageID}&page_size=${pageSize}`,
    AList,
    {
      refreshInterval: 10000,
    },
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

type AnswerProps = {
  question: any;
};

const Answer: React.FC<AnswerProps> = ({ question }) => {
  const [execQUpdate, setExecQUpdate] = useRecoilState(ExecQuestionUpdateState);
  const [_, setUpdateModal] = useRecoilState(AnswerUpdateState);
  const [__, setDeleteModal] = useRecoilState(AnswerDeleteState);
  const [isGet, setIsGet] = useState(false);
  const router = useRouter();
  const [pageID, setPageID] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1000);
  const { data, isLoading, isError, mutate }: any = useAList(question?.id, pageID, pageSize);

  console.log(data);

  useEffect(() => {
    if (isGet) {
      mutate(...data);
      setIsGet(false);
      router.push('/');
    }
  }, [isGet, pageID, data, isLoading]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      <div className='p-8'>
        <div className='justify-center items-center p-8 max-w-6xl mx-auto border-b shadow-lg rounded-xl'>
          <div className='flex justify-center'>
            <h1 className='text-3xl'>Answer </h1>
            <h1 className='text-3xl px-2'>{question.id}</h1>
            <PencilIcon
              onClick={() => setExecQUpdate(!execQUpdate)}
              className='w-12 h-12 ml-10 p-2 items-center text-green-500 cursor-pointer hover:bg-gray-200 rounded-3xl'
            />
          </div>
          <div className='flex justify-center pt-2'>
            <h1 className='text-3xl px-8'>{question.text}</h1>
          </div>
        </div>
        {data.map((d: any) => (
          <div className='justify-center items-center p-8 max-w-6xl mx-auto border-b shadow-lg rounded-xl space-y-5 hover:bg-gray-200'>
            <div className='ml-auto items-center p-8 max-w-6xl mx-auto'>
              <p className='md'>answerID: {d.id}</p>
              <p className='md'>createdAt: {moment(d.created_at).format('LLLL')}</p>
            </div>
            <div className='flex justify-center items-center max-w-6xl mx-auto'>
              <p className='xl'>{d.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Answer;
