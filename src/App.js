import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {

    state = {advice: ""};

    componentDidMount() {
        this.fetchAdvice();
        console.log("compoent did mount");
    };

    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then((response)=>{
            const{ advice } = response.data.slip;
            console.log(advice);
        })
        .catch((error)=>{
            console.log("error");
        })
    };
    render() {
        return(
            <h1>app</h1>
        );
    };
};

export default App;