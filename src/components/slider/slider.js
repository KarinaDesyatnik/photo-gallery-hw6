import React from 'react'
import "./slider.sass"

const Slider = (props) => {
    const { urls } = props.data;
    return(
        <div className="slider" style={{"backgroundImage": `url(${urls.regular})`}}></div>
    )
};

export default Slider

