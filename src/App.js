import logo from "./logo.svg";
import "./App.css";
import "./styles/table.css";
import "./styles/footer.css";
import "./styles/main.css";

import React, { Component } from "react";
import Stateful from "./components/stateful/Stateful";
import Datacomponet from "./components/datacomponet/datacomponet";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/";
import Main from "./components/Main/Main";



class App extends React.Component {
  render(props) {
    console.log(props);
    return (
      <div>
        <Header />
        
        <Stateful />
        <Main />
      
        <Footer />
        {/* 
      <Datacomponet /> */}
        {/* <tr>
            {/* <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td> }
         </tr> */}
      </div>
    );
  }
}

export default App;
