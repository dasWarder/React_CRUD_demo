import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ClientListComponent extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            clients: []            
        };

        this.addClient = this.addClient.bind(this);
    }

    addClient() {
        console.log('Routing to /clients/client');

        this.props.history.push("/clients/client");
    }

    componentDidMount() {
        ClientService.getClients().then(response => {
            this.setState( { clients: response.data });
        });

        ClientService.saveClient();
    }


    render() {
        return (
            <div>
                <div className={ "row" }>
                    <div className={ "col-sm" }>
                        <button className={ "btn btn-primary btn-success" } onClick={ this.addClient }>Add client</button>
                    </div>
                </div>
                <div className={ "row" }>
                    <table className= { "table table-striped" }>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clients.map(
                                    client =>
                                        <tr key = { client.id }>
                                            <td>{ client.firstName }</td>
                                            <td>{ client.lastName }</td>
                                            <td>{ client.email }</td>
                                            <td>
                                                <button className={ "btn btn-warning btn-sm mx-1 col-md-2" }>Edit</button>
                                                <button className={ "btn btn-danger btn-sm mx-1 col-md-2" }>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ClientListComponent;