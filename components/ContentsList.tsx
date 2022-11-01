import React from 'react';

function ContentsList() {
  return (
    <>
      <div className=''>
        {/* category */}
        <div className='font-mono text-2xl space-y-5'>
          <h1 className='text-3xl underline text-orange-500'>Category</h1>
          <div className='hover:text-blue-400'>
            <a href='/qualification'>Qualification</a>
          </div>
          <div>
            <a href='/rust' className='hover:text-blue-400'>
              Rust
            </a>
          </div>
          <div>
            <a href='/go' className='hover:text-blue-400'>
              Go
            </a>
          </div>
          <div>
            <a href='/python' className='hover:text-blue-400'>
              Python
            </a>
          </div>
          <div>
            <a href='/linux' className='hover:text-blue-400'>
              Linux
            </a>
          </div>
          <div>
            <a href='/node' className='hover:text-blue-400'>
              Node.js
            </a>
          </div>
          <div>
            <a href='terraform' className='hover:text-blue-400'>
              Terraform
            </a>
          </div>
          <div>
            <a href='/docker' className='hover:text-blue-400'>
              Docker
            </a>
          </div>
          <div>
            <a href='/aws' className='hover:text-blue-400'>
              AWS
            </a>
          </div>
          <div>
            <a href='/rdb' className='hover:text-blue-400'>
              RDB
            </a>
          </div>
          <div>
            <a href='/kubernetes' className='hover:text-blue-400'>
              Kubernetes
            </a>
          </div>

          {/* recently */}
          <div className='text-2xl font-mono space-y-5'>
            <h1 className='underline text-3xl text-orange-500 mt-10'>Recently Post</h1>
            <div>
              <a href='/a' className='hover:text-blue-400'>
                a
              </a>
            </div>
            <div>
              <a href='/a' className='hover:text-blue-400'>
                a
              </a>
            </div>
            <div>
              <a href='/a' className='hover:text-blue-400'>
                a
              </a>
            </div>
            <div>
              <a href='/a' className='hover:text-blue-400'>
                a
              </a>
            </div>
            <div>
              <a href='/a' className='hover:text-blue-400'>
                a
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentsList;
