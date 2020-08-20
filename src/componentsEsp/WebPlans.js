import React from "react";

const WebPlans = () => {
	return (
		<div className="row full-width no-margin our-section" id="web-plans">
			<div className="col-md-6 franja-radius-right">
				<h1 className="no-margin text-center title-section">Web plans</h1>
			</div>
			<div className="col-md-12">
				<div className="div-flex">
					<div className="flex-services">
						<h2 className="text-center text-services pb-3">Básico</h2>
						<p>2 páginas web o Landing Page</p>
						<p>Diseño Web Personalizado</p>
						<p>Desarrollo Responsivo</p>
						<p>Dominio</p>
						<p>Hosting</p>
						<p>Cuenta de correo</p>
						{/* <h3 className="price pb-3">170$us o más</h3> */}
					</div>
					<div className="flex-services">
						<h2 className="text-center text-services pb-3">Emprendedor</h2>
						<p>Max 6 páginas web</p>
						<p>Diseño Web Personalizado</p>
						<p>Avanzada Interacción</p>
						<p>Dominio</p>
						<p>Hosting</p>
						<p>Wordpress CMS</p>
						<p>Desarrollo Responsivo</p>
						<p>Cuenta de correo</p>
						{/* <h3 className="price pb-3">350$us o más</h3> */}
					</div>
					<div className="flex-services">
						<h2 className="text-center text-services pb-3">Negocio</h2>
						<p>Pages Unlimited</p>
						<p>Diseño Web Personalizado</p>
						<p>Branding</p>
						<p>Dominio</p>
						<p>Hosting</p>
						<p>Carrousel de pago</p>
						<p>Desarrollo Responsivo</p>
						<p>Cuenta de correo</p>
						{/* <h3 className="price pb-3">700$us o más</h3> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebPlans;
