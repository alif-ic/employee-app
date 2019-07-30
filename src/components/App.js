import React from "react"
import TableView from "./TableView"
import EmployeeForm from "./EmployeeForm"

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            employee: [
                {
                    name: 'Alif Jahan',
                    age: 18
                },
                {
                    name: 'Alif',
                    age: 18
                },
                {
                    name: 'Jahan',
                    age: 25
                },
            ],
        };
        //onDelete = this.onDelete.bind(this);
        this.onDelete = (event, index) => {
            this.setState({
                employee: this.state.employee.filter((item, itemIndex) => ( index != itemIndex )),
            });
        };
    }

    render(){
        return (
            <React.Fragment>
                <h1>Employee Management</h1>
                <table className="table table-bordered">
                    <TableView deleteThis={this.onDelete} employee={ this.state.employee } />
                </table>
                <hr />

                <EmployeeForm />

            </React.Fragment>
        );
    }
}
export default App;