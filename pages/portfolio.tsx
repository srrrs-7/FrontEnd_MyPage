import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import JsonPortfolio from '../portfolio.json';

function portfolio() {
  const [portfolios, _] = useState(JsonPortfolio);

  return (
    <>
      <div className='bg-orange-100 f-full'>
        <div>
          <Header />
        </div>
        <div>
          <Footer />
        </div>

        <div className='grid grid-cols-2 grid-flow-row mx-64 px-32'>
          {portfolios.portfolio.map((b) => (
            <div className='m-10'>
              <div
                id={b.id}
                className='space-y-3 border rounded-3xl shadow-2xl p-10 hover:bg-blue-100 cursor-pointer'
              >
                <h1 className='text-2xl font-mono text-center'>{b.link}</h1>
                <h1 className='text-xl font-mono'>{b.image}</h1>
                <h1 className='text-lg font-mono'>{b.contents}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default portfolio;
