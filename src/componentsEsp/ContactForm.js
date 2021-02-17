import React from "react";

const ContactForm = () => {
	return (
		<div>
			<h1 className="title">Contáctanos</h1>
			<form action="https://formspree.io/f/xknpazwy" method="POST">
				<div className="form-group form-contact">
					<label className="no-margin">
						Nombre completo
					</label>
					<input className="form-control" name="fullname" placeholder="Pedro Perez" />
				</div>
				<div className="form-group form-contact">
					<label className="no-margin">
						Correo electronico
					</label>
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="name@example.com"
					/>
				</div>
				<div className="form-group form-contact">
					<label className="no-margin">
						Comentario
					</label>
					<textarea name="description" className="form-control" rows="3" />
				</div>
				<button type="submit" className="btn btn-contact-form text-center">
					Enviar
				</button>
			</form>
		</div>
	);
};
export default ContactForm;
