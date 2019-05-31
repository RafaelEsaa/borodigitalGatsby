import React from 'react';

const ContentPlans = (props) => {
    console.log(props);
    let prueba = props.data.topics.map((data, key) => {
        return (
            <div key={key}>
                <p><i class="fas fa-check"></i> {data}</p>
            </div>
        )
    })
    return (
        <div className="plans">
            <p className="text-center title" style={{ backgroundColor: props.backgroundTitle }}>{props.data.title}</p>
            {prueba}
        </div>
    )
}

export default ContentPlans;