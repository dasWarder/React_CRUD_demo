import React, { Component } from 'react';
import AddClientComponent from "./AddClientComponent";

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {
        return (
            <div className={ "row" }>
                <header>
                    <div>
                        <h1 className={ "text-center text-info text-secondary" }>Clients CRM</h1>
                        <p className={ "text-center text-secondary" }>Manage your clients</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;