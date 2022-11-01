import { useState } from 'react';
import JsonBlog from '../contents.json';
import ContentsList from './ContentsList';
import { useRouter } from 'next/router';

function Blog() {
  const [blogs, _] = useState(JsonBlog);
  const router = useRouter();

  const event_handler = (idx: string) => {
    router.push(`/blog/${idx}`);
  };

  return (
    <>
      <div>
        <div className='absolute right-0 mr-56 mt-12'>
          <ContentsList />
        </div>
        <div className='grid grid-cols-2 grid-flow-row mr-64 ml-20 px-64'>
          {blogs.blog.map((b) => (
            <div className='m-10'>
              <div
                id={b.id}
                className='space-y-3 border rounded-3xl shadow-2xl p-10 hover:bg-blue-100 cursor-pointer'
                onClick={() => event_handler(b.id)}
              >
                <h1 className='text-2xl font-mono text-center'>{b.title}</h1>
                <h1 className='text-xl font-mono'>{b.image}</h1>
                <h1 className='text-lg font-mono'>{b.contents}</h1>
                <h1 className='text-lg font-mono'>{b.timestamp}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
