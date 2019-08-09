import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const onUpload = () => {};

  const props = {
    onUpload
  };

  ReactDOM.render(<Component {...props}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
