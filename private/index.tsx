import React from 'react';
import ReactDOM from 'react-dom/client';
import Client from './components/Client';
import './index.css';

if (typeof window !== 'undefined') {
  ReactDOM.createRoot(window.document.querySelector('#client')!).render(<Client />);
}

export default <div id="client" />;
