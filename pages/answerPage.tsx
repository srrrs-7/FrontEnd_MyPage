import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import { QuestionState } from '../atom/atomQuestion';
import Header from '../components/Header';
import Answer from '../components/QA/Answer';
import QuestionUpdateModal from '../components/QA/QuestionUpdateModal';

const AnswerPage = () => {
  const [q, _] = useRecoilState(QuestionState);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Answer question={q} />
        <QuestionUpdateModal q={q} />
      </div>
    </>
  );
};

export default AnswerPage;
