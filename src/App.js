import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {

    state = {advice: ""};

    componentDidMount() {
        console.log("compoent did mount");
    }
    render() {
        return(
            <h1>app</h1>
        );
    };
};

export default App;