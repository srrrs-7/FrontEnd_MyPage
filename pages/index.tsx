import type { NextPage } from 'next';
import Blogs from '../components/Blog/Blogs';
import CreateModal from '../components/Blog/CreateModal';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <CreateModal />
      </div>
    </div>
  );
};

export default Home;
