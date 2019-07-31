import React from "react"
import TableView from "./TableView"
import EmployeeForm from "./EmployeeForm"
import Nav from "./Nav"

import style from "./../style.scss"

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
        this.setIndex = this.setIndex.bind(this);
        this.goback = this.goback.bind(this);
    }
    goback(event){
        this.props.history.push('/home');
    }

    onDelete(event, index) {
        this.setState({
            employee: this.state.employee.filter((item, itemIndex) => (index != itemIndex)),
        });
    };

    onSubmit(name, age, index=null) {
        if(!index && this.state.current == 'Submit'){
            this.setState({ employee: [...this.state.employee, { name: name, age: age }] });
        }
        else if(index && this.state.current == 'Update'){
            var emp = this.state.employee;
            emp[index].name = name;
            emp[index].age = age;
            this.setState({
                employee: emp,
                current: 'Submit'
            });
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

    render() {
        return (
            <React.Fragment>
                <Nav />
                <h1>Employee</h1>
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

                <button className={style.silver} onClick={this.goback}>Go Back</button>
            </React.Fragment>
        );
    }
}
export default App;