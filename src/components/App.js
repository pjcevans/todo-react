import React, { Component } from "react";
import AccountPanel from "./AccountPanel.js";
import SmartToDoApp from "./SmartToDoApp.js";
import ErrorBoundary from "./ErrorBoundary.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>

        {/*Container div*/}
        <div>

          {/* Account settings header panel */}
          <AccountPanel />

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
