import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header'

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
    <Header  />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})