import React from 'react';

import { HashRouter, Route } from 'react-router-dom'
import EntriesPage from '../../pages/Entries'

import './index.css';

const App = () => {
  return (
    <div className="CommonApp">
      <HashRouter>
        <Route exact path="/" component={EntriesPage} />
      </HashRouter>
    </div>
  )
};

export default App;
