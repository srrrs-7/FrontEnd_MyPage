import React from 'react';
import { useRecoilState } from 'recoil';
import DeleteModal from '../components/Blog/DeleteModal';
import GetBlogPage from '../components/Blog/GetBlog';
import UpdateModal from '../components/Blog/UpdateModal';
import Header from '../components/Header';
import { BlogState } from '../atom/atom';

const BlogPage = () => {
  const [blog, _] = useRecoilState(BlogState);

  return (
    <div>
      <Header />
      <div>
        <GetBlogPage data={blog} />
        <UpdateModal data={blog} />
        <DeleteModal data={blog} />
      </div>
    </div>
  );
};

export default BlogPage;
