import React, { useState, useRef, useEffect } from "react";
import ReactDom from "react-dom";
import "./styles.css";

/**
    Сделай так, чтобы в приложении все классы заменились на функциональные компоненты, для этого используй Hooks

    Импортировать нужные хуки можно так:
        import React, { useState } from "react";

    Список хуков, которые могут пригодиться: useState, useRef, useEffect
 */

// class App extends React.Component {
function App() {
  const [blockIdsState, setBlockIdsState] = useState([]);
  const [lastBlockIdState, setLastBlockIdState] = useState(0);
  const addNew = () => {
	setLastBlockIdState(newLastBlockId => newLastBlockId + 1);
    setBlockIdsState(newBlockIdsState => [...newBlockIdsState, lastBlockIdState]);
  };
  const removeLast = () => {
    setBlockIdsState(newBlockIdsState => newBlockIdsState.slice(0, newBlockIdsState.length - 1));
  };
  return (
      <div className="page">
        <div className="controlPanel">
          <button
            type="button"
            onClick={removeLast}
            className="actionButton"
          >
            -
          </button>
          <button type="button" onClick={addNew} className="actionButton">
            +
          </button>
        </div>
        <div className="container">
          {blockIdsState.map(blockId => (
            <CounterBlock key={blockId} />
          ))}
        </div>
      </div>
    );
}

function CounterBlock() {
  const timer = useRef(null);
  const [valueState, setValueState] = useState(0);
  useEffect(() => {
    timer.current = setInterval(() => {setValueState(newValueState => newValueState + 1)}, 1000);
	return () => {clearInterval(timer.current)};
  }, []);
  return <div className="block">{valueState}</div>;
}

ReactDom.render(<App />, document.getElementById("app"));
