import React from "react"
import Nav from "./Nav";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.goback = this.goback.bind(this);
    }
    goback(event){
        this.props.history.push('/home');
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
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.goback}>Go Back</button>
            </React.Fragment>
        );
    }
}

export default Contacts;