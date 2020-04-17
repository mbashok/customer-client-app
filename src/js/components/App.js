import React from "react";
import Container from "./Container";
import TitleBar from "./TitleBar";

// App component
// Base/top level component.
const App = () => (
  <div>
  	<TitleBar title="Customers Detail"/>
    <Container />
  </div>
);

export default App;