import React from 'react';
import Header from '../../ui/Header';

import './index.css';

const Page = ({children}) => {
  return (
    <div className="CommonPage">
      <Header />
      <div className="CommonPage-content">
        {children}
      </div>
    </div>
  )
};

export default Page;
