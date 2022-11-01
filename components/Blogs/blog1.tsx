import { useState } from 'react';
import JsonBlog from '../../contents.json';

function blog1() {
  const [blogs, setBlogs] = useState(JsonBlog);

  return (
    <>
      {blogs.blog.map((b) => (
        <div>
          <div id={b.id}>
            <h1 className='text-5xl'>{b.title}</h1>
            <h1 className='text-5xl'>{b.image}</h1>
            <h1 className='text-5xl'>{b.timestamp}</h1>
            <h1 className='text-5xl'>{b.contents}</h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default blog1;
