import react, {Fragment} from "react"


class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <form method="POST">
                <label for="name">Name</label>
                <input value={this.props.name} type="text" name="name" placeholder="Name of the employee" />

                <label for="name">Age</label>
                <input value={this.props.age} type="number" name="age" placeholder="Age of the employee" />

                <button onClick={(event) => this.props.formAction(event, index, this.props.name, this.props.age)}>Submit</button>
            </form>
        );
    }
}

export default EmployeeForm;