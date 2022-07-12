import React from 'react';
import './App.css';

function App({ data, rowHeight, visibleRows }) {
  const rootRef = React.useRef();
  const [start, setStart] = React.useState(0);
  
  function getTopHeight() {
    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (data.length - (start + visibleRows + 1));
  }
  
  React.useEffect(() => {
    function onScroll(e) {
      setStart(Math.min(
        data.length - visibleRows - 1,
        Math.floor(e.target.scrollTop / rowHeight)
      ));
    }
    rootRef.current.addEventListener('scroll', onScroll);

    return () => {
      rootRef.current.removeEventListener('scroll', onScroll);
    }
  }, [data.length, visibleRows, rowHeight]);
  
  return (
    <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
      <div style={{ height: getTopHeight() }} />
      <table>
        <tbody>
          {data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
            <tr
              style={{ height: rowHeight }}
              key={start + rowIndex}
            >{row.map((text, colIndex) => (
              <td key={start + '' + rowIndex + colIndex}>{text}</td>
            ))}</tr>
          ))}
        </tbody>
      </table>
      <div style={{ height: getBottomHeight() }} />  
    </div>
  );
}

export default App;
