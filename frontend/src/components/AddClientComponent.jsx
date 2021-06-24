import React, { Component } from 'react';
import ClientService from "../services/ClientService";

class AddClientComponent extends Component {


    constructor(props) {

        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this. createOrUpdateClient = this.createOrUpdateClient.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {

        if(this.state.id === 'null') {

            return;

        } else {

            ClientService.getSingleClientById(this.state.id).then(response => {
                let clientById = response.data;
                this.setState({
                    firstName: clientById.firstName,
                    lastName: clientById.lastName,
                    email: clientById.email
                });
            });
        }
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

    createOrUpdateClient = (c) => {
        c.preventDefault();

        let client = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };

        if(this.state.id === 'null') {

            ClientService.saveClient(client).then(() => {
                this.cancel();
            });

        } else {

            ClientService.updateClient(this.state.id, client).then(
                this.reloadAfterRedirectAndUpdate()
            );

        }
    }

    updateClient = (c) => {
        c.preventDefault();

        let client = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };



        console.log('client: ' + JSON.stringify(client));
    }

    cancel() {
        console.log('routing to /clients');

        this.props.history.push("/clients");
    };

    reloadAfterRedirectAndUpdate() {
        this.cancel();

        window.location.reload();
    }

    getTitle() {
        if(this.state.id === 'null') {
            return 'Create';
        } else {
            return 'Update';
        }
    }
    render() {
        return (
            <div>
                <div className={ "container" }>
                    <div className={ "card col-md-4 offset-md-4 p-3" }>
                        <h3 className={ "text text-center text-primary mb-2" }>
                            { this.getTitle() } client
                        </h3>
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
                                            onClick={ this.createOrUpdateClient }>{  this.getTitle() }</button>
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