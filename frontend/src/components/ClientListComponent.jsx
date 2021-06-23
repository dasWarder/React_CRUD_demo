import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ClientListComponent extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            clients: []            
        };
    }

    componentDidMount() {
        ClientService.getClients().then(response => {
            this.setState( { clients: response.data });
        })
    }


    render() {
        return (
            <div>
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