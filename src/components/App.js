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
        this.setIndex = this.setIndex.bind(this)
    }

    onDelete(event, index) {
        this.setState({
            employee: this.state.employee.filter((item, itemIndex) => (index != itemIndex)),
        });
    };

    onSubmit(name, age,  index=null) {
        if(!index && self.state.current == 'Submit'){
            this.setState({ employee: [...this.state.employee, { name: name, age: age }] });
        }
        else{
            console.log(1);
        }
    };

    setIndex(index){
        var emp = this.state.employee[index];
        emp.index = index;
        this.setState({
            currentEmp: emp,
            current: 'Update'
        });
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentEmp != this.props.currentEmp){
            var emp = this.state.employee[index];
            emp.index = index;
            this.setState({
                currentEmp: emp,
                current: 'Update'
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Employee Management</h1>
                <table className="table table-bordered">
                    <TableView
                        onUpdateTry={this.edit}
                        deleteThis={this.onDelete}
                        editThis={this.setIndex}
                        employee={this.state.employee} />
                </table>
                <hr />

                <EmployeeForm
                    currentEmp={this.state.currentEmp}
                    submitThis={this.onSubmit}
                    currentButtonName={this.state.current} />
            </React.Fragment>
        );
    }
}
export default App;