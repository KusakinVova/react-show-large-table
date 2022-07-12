import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function makeTableData(w, h) {
  return new Array(h).fill(0).map((_, row) => {
    return new Array(w).fill(0).map((_, col) => {
      return row * 10 + col;
    });
  });
}

root.render(
  <React.StrictMode>
    <App
      data={makeTableData(10, 10000)}
      rowHeight={40}
      visibleRows={10}
    />
  </React.StrictMode>
);
