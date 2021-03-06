import React, { Component } from "react";
import SmartAccountPanel from "./SmartAccountPanel.js";
import SmartToDoApp from "./SmartToDoApp.js";
import ErrorBoundary from "./ErrorBoundary.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        {/*Container div*/}
        <div>

          {/* Account settings header panel */}
          <SmartAccountPanel />

          {/* Main ToDo UI */}
          <ErrorBoundary>
            <SmartToDoApp />
          </ErrorBoundary>

        </div>



      </div>
    );
  }
}

export default App;
