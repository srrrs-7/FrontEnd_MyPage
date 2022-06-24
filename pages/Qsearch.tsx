import React from 'react';
import { useRecoilState } from 'recoil';
import { SearchQAValueState } from '../atom/atom';
import Header from '../components/Header';
import QAsearch from '../components/QA/QAsearch';
import QuestionCreateModal from '../components/QA/QuestionCreateModal';
import QuestionDeleteModal from '../components/QA/QuestionDeleteModal';
import QuestionUpdateModal from '../components/QA/QuestionUpdateModal';

const QA = () => {
  const [searchValue, _] = useRecoilState(SearchQAValueState);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <QAsearch value={searchValue} />
      </div>
    </>
  );
};

export default QA;
