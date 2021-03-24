import React from "react";

function App() {


  const dom =
    <React.Fragment>
      <label htmlFor={"bar"} >bar</label>
      <input id={"bar"} type="text" value={"hoge"}  />
    </React.Fragment>
  return dom;
}

export default App;