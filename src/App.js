import React from "react"
import './App.css';
//import Teste from "./components/teste/Teste";
//import { Content } from "./Content";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <React.Fragment>
      <body>
        <Header/>
        <Main/>
      </body>
    </React.Fragment>
  );
}

export default App;
