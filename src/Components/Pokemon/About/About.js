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

    useEffect(() => {
        getHeight();
    }, [])

    console.log(height)

    return (
        <div className='about'>
            <p>{props.flavorText}</p>
            <section className='height-weight-box'>     
            
            </section>
        </div>
    )
}