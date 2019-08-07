import React from "react"
import Nav from "./Nav";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <Nav />
                <h1>Welcome to simple react app for employee...</h1>
            </React.Fragment>
        );
    }
}

export default Home;