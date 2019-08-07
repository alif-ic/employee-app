import React, { Fragment } from "react"

import { connect } from "react-redux"

import { getEmployee } from "../Actions/EmployeeActions"

class TableView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: this.props.employee
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);

        // console.log(
        //     this.props.getEmployee()
        // );
        // theStore.dispatch(getEmployee);
        // const emp = this.props.getEmployee();
        // console.log(emp);
        // const t = this.props.dispatch({
        //     type: 'GET_EMPLOYEE',
        //     action: [1, 2, 3, 4, 54, 5]
        // });
        console.log(this.props.employees);
        console.log(this.props.getEmployee());

    }

    onDelete(event, index){
        if(this.props.deleteThis){
            this.props.deleteThis(index);
        }
    }
    onEdit(event, index){
        if(this.props.editThis){
            this.props.editThis(index);
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.employee != this.props.employee){
            this.setState({
                employee: this.props.employee
            });
        }
    }

    render() {
        return (
            <Fragment>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th>Age</th>
                        <th className="text-center" colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employee.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <th className="text-center">
                                <button
                                    onClick={(event) => this.onEdit(event, index)}>
                                    Edit
                                </button>
                            </th>
                            <th className="text-center">
                                <button
                                    onClick={(event) => this.props.deleteThis(event, index)}>
                                    Delete
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Fragment>
        );
    }
}

const mapDispatchToProps = {
    getEmployee
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableView);