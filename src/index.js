import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [LazyComponent, setLazyComponent] = useState(null);

  function showLazyComponent() {
    import("./LazyComponent").then(component => {
      setLazyComponent(component.default);
    });
  }

  return <h1>Hello React 16,Webpack 4 & Babel 7!<button onClick={showLazyComponent}>Click</button><span>{LazyComponent? LazyComponent : null}</span></h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));