import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <h1 className="title">Contact us</h1>
            <form action="https://formspree.io/esaarafael@hotmail.com" method="POST">
                <div className="form-group form-contact">
                    <label className="no-margin" name="fullname">Full Name</label>
                    <input className="form-control" placeholder="Hola Mundo" />
                </div>
                <div className="form-group form-contact">
                    <label className="no-margin" name="email">Email address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="form-group form-contact">
                    <label className="no-margin" name="description">Project Description</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-contact-form text-center">Sent</button>
            </form>
        </div>
    )
}
export default ContactForm;