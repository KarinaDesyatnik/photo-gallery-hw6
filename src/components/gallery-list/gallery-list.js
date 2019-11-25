import React, {Component} from 'react'
import GalleryService from "../../servise";
import "./gallery_list.sass"
import {Link} from "react-router-dom";

const service = new GalleryService();

export default class GalleryList extends Component {

    state = {
        list: [],
        page: 1,
        loading: true
    };

    componentDidMount() {
        this.getPhotos();
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.id !== this.props.id) {
            this.setState({
                list: [],
                page: 1,
                loading: true
            }, () => this.getPhotos());
        }
    }

    getPhotos = () => {
        const {page} = this.state;
        const {id} = this.props;
        service.getPhotos(page, id)
            .then((list) => {
                this.setState({
                    list,
                    page: page + 1,
                    loading: false,
                })
            })
    };

    showMorePhotos = () => {
        const {page, list} = this.state;
        const {id} = this.props;

        this.setState({loading: true});

        service.getPhotos(page, id)
            .then((data) => {
                this.setState({
                    list: [
                        ...list,
                        ...data,
                    ],
                    page: page + 1,
                    loading: false,
                })
            })
    };

    render(){
        const {list, loading} = this.state;

        return(
            <div className={"gallery-section"}>
                <div className="gallery-container">
                    {
                        list.map((el) => {
                            return(
                                <Link
                                    to={`/photo/${el.id}`}
                                    className={`photo-item`}
                                    key = {el.id}>
                                    <div className="img">
                                        <img key={el.id} src={el.urls.small} alt=""/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="loader-box">
                    <span
                        onClick={() => this.showMorePhotos()}
                        className={`glyphicon glyphicon-refresh loader ${loading? "active" : ""}`}>
                    </span>
                </div>
            </div>
        )
    }
}
