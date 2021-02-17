import React from "react";

const ContactForm = () => {
	return (
		<div>
			<h1 className="title">Contact us</h1>
			<form action="https://formspree.io/f/xknpazwy" method="POST">
				<div className="form-group form-contact">
					<label className="no-margin">
						Full Name
					</label>
					<input name="fullname" className="form-control" placeholder="George" />
				</div>
				<div className="form-group form-contact">
					<label className="no-margin">
						Email address
					</label>
					<input
						name="email"
						type="email"
						className="form-control"
						placeholder="name@example.com"
					/>
				</div>
				<div className="form-group form-contact">
					<label className="no-margin">
						Project Description
					</label>
					<textarea name="description" className="form-control" rows="3" />
				</div>
				<button type="submit" className="btn btn-contact-form text-center">
					Sent
				</button>
			</form>
		</div>
	);
};
export default ContactForm;
