import React from 'react';

import Header from './header/Header';


const LeftPanel = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-12 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-md">
       <Header />
      </div>
    </div>
  );
};

export default LeftPanel;
