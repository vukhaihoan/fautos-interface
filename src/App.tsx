import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateGmail from "./components/createGmail";
import CreateProfile from "./components/createProfile";
import RunCookie from "./components/runCookie";
function App() {
    return (
        <div>
            <CreateGmail />
            <CreateProfile />
            <RunCookie />
        </div>
    );
}

export default App;
