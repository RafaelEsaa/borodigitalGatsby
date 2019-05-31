import React from 'react';

const TitleSection = (props) => {
    return (
        //Ejem: Titulo usandose en about us
        <div>
            <h1 className="title-section text-center">{props.data.title}</h1>
            <hr style={{ width: props.hr, border: `1px solid #ccced1` }} />
        </div>
    )
}
export default TitleSection;