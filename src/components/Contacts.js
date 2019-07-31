import React from "react"
import Nav from "./Nav";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <Nav />
                <a
                    href="mailto:someone@example.com?Subject=Hello%20again"
                    target="_top">
                    Send Mail
                </a>
                <a href="#back" target="_top">Go Back</a>
            </React.Fragment>
        );
    }
}

export default Contacts;