import React, {Component} from 'react'
import "./home_page.sass"
import Slider from "../../slider/slider";
import GalleryList from "../../gallery-list/gallery-list";
import {withData} from "../../hoc/with-data";
import GalleryService from "../../../servise";

const service = new GalleryService();

export default class HomePage extends Component {

    render() {
        const SliderComponent = withData(Slider, service.getRandomPhoto);
        return(
            <>
                <SliderComponent/>
                <GalleryList/>
            </>
        )
    }
}