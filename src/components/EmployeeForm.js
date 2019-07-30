import React, {Fragment} from "react"


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Alif Jahan" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Age</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="You age" />
                </div>

                <button type="button" className="btn btn-success btn-lg">Submit</button>
            </form>

        );
    }
}

export default EmployeeForm;