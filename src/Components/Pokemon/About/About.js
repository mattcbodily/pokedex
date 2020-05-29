import React, {useState, useEffect} from 'react';
import './About.css';

export default props => {
    let [height, setHeight] = useState(''),
        [metricHeight, setMetricHeight] = useState(''),
        [weight, setWeight] = useState(0),
        [metricWeight, setMetricWeight] = useState(0);

    const getHeight = () => {
        let totalInches = Math.round(props.height * 3.94),
            feet = Math.floor(totalInches / 12),
            remInches = totalInches - (feet * 12);

        let centimeters = props.height * 10,
            meters;

        if(centimeters >= 100){
            meters = centimeters / 100;
            setMetricHeight(`${meters}m`);
        } else {
            setMetricHeight(`${centimeters}cm`);
        }
        
        setHeight(`${feet}' ${remInches}"`);
    }

    const getWeight = () => {
        let pounds = props.weight / 4.536,
            trimNum = Number(pounds.toFixed(1));

        let kilograms = props.weight / 10;
            
        setWeight(trimNum);
        setMetricWeight(kilograms);
    }

    useEffect(() => {
        getHeight();
        getWeight();
    }, [])

    return (
        <div className='about'>
            <p>{props.flavorText}</p>
            <section className='height-weight-box'>     
                <section>
                    <p className='size-prompt'>Height</p>
                    <p>{height} ({metricHeight})</p>
                </section>
                <section>
                    <p className='size-prompt'>Weight</p>
                    <p>{weight}lbs ({metricWeight}kg)</p>
                </section>
            </section>
        </div>
    )
}