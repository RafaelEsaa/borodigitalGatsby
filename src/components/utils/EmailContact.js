import React, { Component } from 'react';

class EmailContact extends Component {

    actionEmail() {
        window.location.href = "mailto:info@borodigital.com?subject=Solicitud%20Web";
    }

    render() {
        return (
            <div className="row full-width no-margin mt-4 bg-dark">
                <div className="col-md-12">
                    <h2 onClick={() => this.actionEmail()} className="text-center no-margin email">{this.props.email}</h2>
                </div>
            </div>
        )
    }
}

export default EmailContact;