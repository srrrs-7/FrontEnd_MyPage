import dynamic from 'next/dynamic';
import React from 'react';

const Profile = dynamic(() => import('../3D/Profile'), {
  ssr: true,
});

const profile = () => {
  return (
    <>
      <div>
        <Profile />
      </div>
    </>
  );
};

export default profile;
