import React, {Fragment} from "react"


class TableView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employee.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <th>
                                <button>Edit</button>
                            </th>
                            <th>
                                <button>Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Fragment>
        );
    }
}

export default TableView;