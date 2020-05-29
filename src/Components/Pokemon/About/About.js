import React, {useState, useEffect} from 'react';
import './About.css';

export default props => {
    let [height, setHeight] = useState(''),
        [weight, setWeight] = useState(0);

    const getHeight = () => {
        let totalInches = Math.round(props.height * 3.94),
            feet = Math.floor(totalInches / 12),
            remInches = totalInches - (feet * 12);
        
        setHeight(`${feet}' ${remInches}"`);
    }

    const getWeight = () => {
        let pounds = props.weight / 4.536,
            trimNum = Number(pounds.toFixed(1));
        setWeight(trimNum);
    }

    useEffect(() => {
        getHeight();
        getWeight();
    }, [])

    console.log(height)
    console.log(weight)

    return (
        <div className='about'>
            <p>{props.flavorText}</p>
            <section className='height-weight-box'>     
            
            </section>
        </div>
    )
}