import React, { Component } from "react";
import ClientService from "../services/ClientService";


class GetClientComponent extends  Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        }

        this.returnMainPage = this.returnMainPage.bind(this);
    }

    componentDidMount() {
        ClientService.getSingleClientById(this.state.id).then(response => {

            let detailClient = response.data;

            this.setState({
                id: detailClient.id,
                firstName: detailClient.firstName,
                lastName: detailClient.lastName,
                email: detailClient.email
            });
        })
    };

    returnMainPage() {
        console.log('Return to the main page');

        this.props.history.push("/clients");
    }

    render() {
        return (
            <div className={ "row offset-md-0 col-md-12" }>
                <a onClick={ this.returnMainPage } className={ "col-md-2 offset-md-11" }>return main</a>
                <hr/>
                <div className={ "card-body" }>
                    <div className={ "md-3 col-md-5 my-2 " }>
                        <label className={ "display-6 mx-2" }> Name:
                        </label><span className={ "display-6 h3 mx-2 text-primary" }>{ this.state.firstName }</span>
                    </div>
                    <div className={ "md-3 col-md-5 my-2 "}>
                        <label className={ "display-6 h3 mx-2" }> Surname: </label>
                        <span className={ "display-6 h3 mx-2 text-primary" }>{ this.state.lastName }</span>
                    </div>
                    <div className={ "md-3 col-md-5 my-2" }>
                        <label className={ "display-6 h3 mx-2" }> Email: </label>
                        <span className={ "display-6 h3 mx-2 text-primary" }>{ this.state.email }</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetClientComponent;