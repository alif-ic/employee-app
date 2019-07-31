import React, { Fragment } from "react"


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.currentEmp.index || null,
            name: this.props.currentEmp.name || '',
            age: this.props.currentEmp.age || '',
            error: {
                name: 'Unknown',
                desc: 'You have an error!'
            },
            nameError:  "We'll never share your email with anyone else.",
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submit = this.submit.bind(this);
        this.validator = this.validator.bind(this);
    }

    validator(param){
        if(param && param.toString().replace(/\s/g,'')){
            return true;
        }
        return false;
    }

    submit(event, name, age, index) {
        event.preventDefault();
        if (!this.validator(name)){
            this.setState({
                error: {
                    name: 'nameError',
                    desc: 'Please put a valid name'
                }
            });
            return;
        }
        if (!this.validator(age) || parseInt(age) <= 0 || parseInt(age) > 100){
            this.setState({
                error: {
                    name: 'ageError',
                    desc: 'Please put a valid age'
                }
            });
            return;
        }
        if (this.props.submitThis) {
            this.props.submitThis(name, age, index);
            this.setState({
                index: null,
                name: '',
                age: '',
                error: {
                    name: 'Unknown',
                    desc: 'You have an error!'
                }
            });
        }
    }

    onChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componentDidUpdate(prevProps){
        if(prevProps.currentEmp != this.props.currentEmp){
            this.setState({
                index: this.props.currentEmp.index,
                name: this.props.currentEmp.name,
                age: this.props.currentEmp.age,
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input
                        onChange={(event) => this.onChangeHandler(event)}
                        value={this.state.name}
                        autoComplete="off"
                        name="name"
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Alif Jahan" />
                    <small id="exampleFormControlInput1" className="form-text text-muted">
                        { this.state.error.name == 'nameError' && this.state.error.desc }
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Age</label>
                    <input
                        onChange={(event) => this.onChangeHandler(event)}
                        value={this.state.age}
                        autoComplete="off"
                        min="0"
                        max="100"
                        name="age"
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="You age" />
                    <small id="exampleFormControlInput2" className="form-text text-muted">
                        { this.state.error.name == 'ageError' && this.state.error.desc }
                    </small>
                </div>

                <input
                    onClick={(event) => this.submit(event, this.state.name, this.state.age, this.state.index)}
                    type="submit"
                    className="btn btn-success btn-lg"
                    value={this.props.currentButtonName} />
            </form>
        );
    }
}

export default EmployeeForm;