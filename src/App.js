import React from "react";

function App() {
  const dom = <input type="button" value={"hoge"} onClick={() => {console.log("I am clicked")}} />
  return dom;
}

export default App;
