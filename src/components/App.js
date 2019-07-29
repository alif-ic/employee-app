import React from "react"
import TableView from "./TableView"

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
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
        };
        //onDelete = this.onDelete.bind(this);
        this.onDelete = (event, index) => {
            this.setState({
                employee: this.state.employee.filter((item, itemIndex) => ( index != itemIndex )),
            });
        };
    }

    render(){
        return (
            <React.Fragment>
                <h1>List View</h1>
                <table>
                    <TableView deleteThis={this.onDelete} employee={ this.state.employee } />
                </table>
            </React.Fragment>
        );
    }
}
export default App;