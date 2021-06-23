import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }


    render() {
        return (
            <div className={ "row" }>
                <footer className={ "text-center" }>
                    <hr/>
                    <a href={ "https://github.com/dasWarder/React_CRUD_demo"}>Project's source code</a>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;