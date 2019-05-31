import React from 'react';
import dataPlans from '../data/socialPlanBasic.json'

const SocialPlans = (props) => {
    console.log(props);
    let prueba = props.data.topics.map((data, key) => {
        return (
            <div key={key}>
                <p>{data}</p>
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

export default SocialPlans;