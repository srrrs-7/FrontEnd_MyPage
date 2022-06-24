import Header from '../components/Header';
import QA from '../components/QA/QA';
import QuestionCreateModal from '../components/QA/QuestionCreateModal';
import QuestionDeleteModal from '../components/QA/QuestionDeleteModal';
import QuestionUpdateModal from '../components/QA/QuestionUpdateModal';

const QandA = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <QA />
        <QuestionDeleteModal />
        <QuestionCreateModal />
      </div>
    </>
  );
};

export default QandA;
