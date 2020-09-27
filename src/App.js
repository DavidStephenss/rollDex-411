import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchRandoms from "./components/FetchComponent";
import PersonDetails from "./components/PersonDetails";
import FetchComponent from "./components/FetchComponent";

class App extends React.Component {
  // state = {
  //   showDetails: true,
  // };

  // handleClick = () => {
  //   this.state.showDetails = !this.state.showDetails;
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FetchComponent />
        </header>
      </div>
    );
  }
}

export default App;
