import React from 'react';
import "./app.sass"
import GalleryList from "../gallery-list/gallery-list";
import Header from "../header/header";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import PhotoCard from "../photo-card/photo-card";
import Search from "../search/search";

const App = () => {
    return (
        <div className="app">
            <Header headerId = {2} item2 = {"string"}/>
            <Switch>
                <Route
                    path={"/"}
                    render={ () => {
                        return <HomePage/>
                    }}
                    exact
                />
                <Route
                    path={"/all/"}
                    render={ () => {
                        return <HomePage/>
                    }}
                    exact
                />
                <Route
                    path={"/animal/:id"}
                    render={ ({match}) => {
                        return <GalleryList id={match.params.id} />
                    }}
                    exact
                />
                <Route
                    path={"/photo/:id"}
                    render={ ({ match }) => {
                        return <PhotoCard id = {match.params.id}/>
                    }}
                    exact
                />
                <Route
                    path={"/films/:id"}
                    render={ ({match}) => {
                        return <GalleryList id={match.params.id} />
                    }}
                    exact
                />
                <Route
                    path={"/food&drink/:id"}
                    render={ ({match}) => {
                        return <GalleryList id={match.params.id} />
                    }}
                    exact
                />
                <Route
                    path={"/nature/:id"}
                    render={ ({match}) => {
                        return <GalleryList id={match.params.id} />
                    }}
                    exact
                />
                <Route
                    path={"/search/"}
                    render={ () => {
                        return <Search/>
                    }}
                    exact
                />
                <Route
                    path={"/login/"}
                    render={ () => {
                        const login = false;
                        if(!login) return <Redirect to={"/all/"} />
                        return <div>Some important content</div>
                    }}
                    exact
                />
                <Route
                    render={ () => {
                        return <h2>Page Not Found</h2>
                    }}
                    exact
                />
            </Switch>
        </div>
    );
};

export default App;



