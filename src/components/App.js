import React from "react"
import TableView from "./TableView"
import EmployeeForm from "./EmployeeForm"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "Submit",
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
            currentEmp: {},
        };
        this.onDelete = this.onDelete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onDelete(event, index) {
        this.setState({
            employee: this.state.employee.filter((item, itemIndex) => (index != itemIndex)),
        });
    };

    onSubmit(name, age) {
        this.setState({ employee: [...this.state.employee, { name: name, age: age }] });
    };

    render() {
        return (
            <React.Fragment>
                <h1>Employee Management</h1>
                <table className="table table-bordered">
                    <TableView onUpdateTry={this.edit} deleteThis={this.onDelete} employee={this.state.employee} />
                </table>
                <hr />

                <EmployeeForm currentEmp={this.state.currentEmp} submitThis={this.onSubmit} currentButtonName={this.state.current} />

            </React.Fragment>
        );
    }
}
export default App;