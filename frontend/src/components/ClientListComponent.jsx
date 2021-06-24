import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ClientListComponent extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            clients: []            
        };

        this.addClient = this.addClient.bind(this);
        this.editClient = this.editClient.bind(this);
        this.getClient = this.getClient.bind(this);
    }

    addClient() {
        console.log('Routing to /clients/client');

        this.props.history.push('/clients/client/store/' + null);
    }

    editClient(id) {
        console.log('Routing to /clients/client/store/',id )

        this.props.history.push(`/clients/client/store/${id}`);
    }

    getClient(id) {
        console.log('Routing to /clients/client/', id);

        this.props.history.push(`/clients/client/${id}`);
    }

    deleteClient(id) {
        console.log('Delete client with id=', id);

        ClientService.deleteClientById(id).then(
            window.location.reload()
        )
    }

    componentDidMount() {
        ClientService.getClients().then(response => {
            this.setState( { clients: response.data });
        });
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
                                                <button onClick={ () => this.getClient(client.id) } className={ "btn btn-success btn-sm mx-1 col-md-2" }>Details</button>
                                                <button onClick={ () => this.editClient(client.id) } className={ "btn btn-warning btn-sm mx-1 col-md-2" }>Edit</button>
                                                <button onClick={ () => this.deleteClient(client.id) } className={ "btn btn-danger btn-sm mx-1 col-md-2" }>Delete</button>
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