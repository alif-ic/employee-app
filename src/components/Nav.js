import React from 'react'
import { NavLink} from "react-router-dom"

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Employee</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/employee">Employees</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/remployee">Employees(Reducers)</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;