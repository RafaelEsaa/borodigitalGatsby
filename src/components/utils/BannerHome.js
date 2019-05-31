import React from 'react';
import { Link as Linkscroll } from "react-scroll";

import Img from 'gatsby-image'

const BannerHome = (props) => {
    return (
        <div className="row full-width no-margin banner-home">
            <div className="col-md-12 no-padding">
                <div className="div-banner-home" style={{ color: props.textColor }}>
                    <div className="mensaje-banner-home" style={{ borderBottom: `1px solid ${props.textColor}` }}>
                        <h1 className="text-center">{props.title}</h1>
                    </div>
                    <div className="description-banner-home">
                        {(props.textButton) ?
                            <Linkscroll
                                to="contact-us"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={900}
                            ><button className="btn">{props.textButton}</button></Linkscroll> :
                            ''}
                        <p className="description text-center">{props.subtitleButton}</p>
                    </div>
                </div>
                <Img className="img-banner" fluid={props.img.childImageSharp.fluid} />
            </div>
        </div>
    )
}

export default BannerHome