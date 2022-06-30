import React from 'react';
import Header from '../components/Header';
import { Draggable } from 'drag-react';

const skills = [
  {
    id: 5,
    title: 'Node.js',
    description: 'yarn, ',
    bgColor: 'bg-green-200',
    image: '/nodejs.png',
  },
  {
    id: 4,
    title: 'Three.js',
    description: '3D Graphics',
    bgColor: 'bg-red-200',
    image: '/threejs.png',
  },
  {
    id: 3,
    title: 'tailwind.css',
    description: 'tailwind-elements',
    bgColor: 'bg-yellow-200',
    image: '/tailwind.png',
  },
  {
    id: 2,
    title: 'Next.js',
    description: 'SSR, SWR, Vercel',
    bgColor: 'bg-blue-200',
    image: '/next.png',
  },
  {
    id: 1,
    title: 'React.js',
    description: 'axios, recoil, React.js example',
    bgColor: 'bg-gray-200',
    image: '/react.png',
  },
];

const nodejs = () => {
  return (
    <>
      <Header />
      <div>
        <div className='flex items-center m-10 text-xl text-black font-serif'>
          <h1>Question: 2^16 = ?</h1>
        </div>
        <div className='flex justify-center items-center p-2 text-6xl text-green-500 font-serif mt-64'>
          <h1>Look at my Skill Card by Drag</h1>
        </div>
        {skills.map((s) => (
          <Draggable>
            <div className='flex max-w-3xl border border-blue-200 m-3'>
              <div
                className={`border-r border-b border-l border-gray-400 rounded-b p-4 flex flex-col justify-between leading-normal ${s.bgColor}`}
              >
                <div className='flex'>
                  <img
                    src={s.image}
                    alt='icon or image'
                    className='p-2 m-5 w-48 h-48 object-contain'
                  />
                  <div>
                    <div className='flex'>
                      <h1 className='text-gray-900 font-bold text-xl mb-2 mr-3 ml-auto p-3'>
                        {s.id}
                      </h1>
                    </div>
                    <p className='text-gray-700 text-3xl mb-2'>{s.title}</p>
                    <p className='text-gray-700 text-xl'>{s.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
        ))}
      </div>
    </>
  );
};

export default nodejs;
