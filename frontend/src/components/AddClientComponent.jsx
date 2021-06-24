import React, { Component } from 'react';
import ClientService from "../services/ClientService";

class AddClientComponent extends Component {


    constructor(props) {

        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.createClient = this.createClient.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    };

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    };

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    };

    createClient = (c) => {
        c.preventDefault();

        let client = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };

        ClientService.saveClient(client).then(() => {
            this.cancel();
        });

        console.log('client: ' + JSON.stringify(client));
    }

    cancel() {
        console.log('routing to /clients');

        this.props.history.push("/clients");
    };


    render() {
        return (
            <div>
                <div className={ "container" }>
                    <div className={ "card col-md-4 offset-md-4 p-3" }>
                        <h3 className={ "text text-center text-primary mb-2" }>Create client</h3>
                        <div className={ "row" }>
                            <div className={ "card-body" }>
                                <form>
                                    <div className={ "form-group" }>
                                        <div className={ "mb-3" }>
                                            <label className={ "mb-1" }>Name</label>
                                            <input type={ "text" } className={ "form-control col-md-12" } placeholder={ "First name" }
                                                value={ this.state.firstName } onChange={ this.changeFirstNameHandler }/>
                                        </div>
                                        <div className={ "mb-3" }>
                                            <label className={ "mb-1" }>Surname</label>
                                            <input type={ "text" } className={ "form-control col-md-12" } placeholder={ "Last name" }
                                                value={ this.state.lastName } onChange={ this.changeLastNameHandler }/>
                                        </div>
                                        <div className={ "mb-3" }>
                                            <label className={ "mb-1" }>Email</label>
                                            <input type={ "email" } className={ "form-control col-md-12" } placeholder={ "Email adress" }
                                                value={ this.state.email } onChange={ this.changeEmailHandler }/>
                                        </div>
                                        <button type="submit" className="btn btn-success col-md-3 mx-1"
                                            onClick={ this.createClient }>Create</button>
                                        <button type="submit" className="btn btn-danger col-md-3 mx-1"
                                                onClick={ this.cancel }>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddClientComponent;