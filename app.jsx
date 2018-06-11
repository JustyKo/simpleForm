class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        };
    }
    render() {
        return(
            <div>
                <div className="box">
                <p>Imię: </p>
                <input onInput={this.printFirstName.bind(this)} value={this.state.firstName} type="text"/>
                </div>
                <div className="box">
                <p>Nazwisko: </p>
                <input onInput={this.printLastName.bind(this)} value={this.state.lastName} type="text"/>
                </div>
                <output>{this.state.firstName} {this.state.lastName}</output>
            </div>
        )
    }
printFirstName(event){
    this.setState({
        firstName: event.target.value
    })
}

printLastName(event){
    this.setState({
        lastName: event.target.value
    })
}
}

ReactDOM.render(
    <App />, document.getElementById("app")
);