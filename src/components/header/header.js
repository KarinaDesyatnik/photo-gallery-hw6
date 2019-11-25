import React, {Component} from 'react'
import "./header.sass"
import {NavLink} from "react-router-dom";
import logo from './logo.png'
import search from './search.svg'

const categories = {
    "animal": 3330452,
    "films": 4694315,
    "food": 3330455,
    "nature": 3330448
};

export default class Header extends Component {

    render() {

        return(
            <div className={"header"}>
                <NavLink to={"/"} className="logo"><img src={logo}/></NavLink>
                <div className="menu">
                    <NavLink to={"/all/"} className="item">All</NavLink>
                    <NavLink to={`/animal/${categories.animal}`} className="item">Animals</NavLink>
                    <NavLink to={`/films/${categories.films}`} className="item">Films</NavLink>
                    <NavLink to={`/food&drink/${categories.food}`} className="item">Food&Drink</NavLink>
                    <NavLink to={`/nature/${categories.nature}`} className="item">Nature</NavLink>
                    <NavLink to={"/search/"} className="item"><img src={search}/></NavLink>
                </div>
                <NavLink to={"/login/"} className="item">Login</NavLink>
            </div>
        )
    }
}

Header.defaultProps = {
    headerId: 0
};

Header.propTypes = {
    headerId: (props, propName, componentName) => {
        const value = props[propName];

        if(typeof value === "number" && !isNaN(value)) {
            return;
        }

        return new TypeError(`${componentName}: ${propName} must be a number`)
    }
}
