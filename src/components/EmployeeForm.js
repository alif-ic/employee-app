import React, {Fragment} from "react"


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
    }

    onNameChange(event){
        this.setState({
            name: event.target.value
        });
    }

    onAgeChange(event){
        this.setState({
            age: event.target.value
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input onChange={(event) => this.onNameChange(event)} value={this.state.name} autoComplete="off" name="name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Alif Jahan" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Age</label>
                    <input min="0" max="100" onChange={(event) => this.onAgeChange(event)} value={this.state.age} autoComplete="off" name="age" type="number" className="form-control" id="exampleFormControlInput2" placeholder="You age" />
                </div>

                <button onClick={(event) => this.props.submitThis(event, this.state.name, this.state.age)} type="button" className="btn btn-success btn-lg">{this.props.currentButtonName}</button>
            </form>
        );
    }
}

export default EmployeeForm;