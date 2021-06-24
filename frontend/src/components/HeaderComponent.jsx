import React, { Component } from 'react';

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
                        <h1 className={ "text-center text-info text-secondary" }>List of clients</h1>
                        <p className={ "text-center text-secondary" }>A full list of your clients available here</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;