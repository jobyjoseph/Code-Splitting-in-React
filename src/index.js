import React, {useState} from "react";
import ReactDOM from "react-dom";
import LazyComponent from "./LazyComponent";

const App = () => {

  const [showLazy, setShowLazy] = useState(false);

  function showLazyComponent() {
    setShowLazy(true);
  }

  return <h1>Hello React 16,Webpack 4 & Babel 7!<button onClick={showLazyComponent}>Click</button><span>{showLazy? <LazyComponent/> : null}</span></h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));