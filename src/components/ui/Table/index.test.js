import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const columns = [
    {
      Header: 'Amount',
      accessor: 'Amount'
    }
  ];
  const data = [];

  const props = {
    columns,
    data
  };

  ReactDOM.render(<Component {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
