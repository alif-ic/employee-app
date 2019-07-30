import React from "react"
import TableView from "./TableView"
import EmployeeForm from "./EmployeeForm"

class App extends React.Component{

    constructor(props){
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
        //onDelete = this.onDelete.bind(this);
        this.onDelete = (event, index) => {
            this.setState({
                employee: this.state.employee.filter((item, itemIndex) => ( index != itemIndex )),
            });
        };
        this.edit = (event, index) => {

            this.setState({
                current: "Update",
            });
        }

        this.onSubmit = (event, index, name, age) => {
            if(index == null && this.state.current == 'Submit'){
                this.setState({employee: [...this.state.employee, {name: name, age: age}]});
            }
        };
    }

    render(){
        return (
            <React.Fragment>
                <h1>Employee Management</h1>
                <table className="table table-bordered">
                    <TableView onUpdateTry={this.edit} deleteThis={this.onDelete} employee={ this.state.employee } />
                </table>
                <hr />

                <EmployeeForm submitThis={this.onSubmit} currentEmployee={this.state.currentEmp} currentButtonName={this.state.current} />

            </React.Fragment>
        );
    }
}
export default App;