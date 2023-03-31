import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Client() {
  return (
    <div className="message" p="2">
      Client
    </div>
  );
}

if (typeof window !== 'undefined') {
  ReactDOM.createRoot(window.document.querySelector('#client')!).render(<Client />);
}

export default <div id="client" />;
