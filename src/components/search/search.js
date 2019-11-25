import React, {Component} from 'react'
import GalleryService from "../../servise";
import  GalleryList from "../gallery-list/gallery-list";
import "./search.sass"

const service = new GalleryService();

export default class Search extends Component {

    state = {
        value: '',
        search: [],
        page: 1,
        empty: false,
        loading: false,
    };

    inputChange = (e) => {
        const {value} = e.target;
        this.setState({value});     
    };

    funcSubmit = (e) => {
        e.preventDefault();
        const {value, page} = this.state;
        if (!value) return this.setState({empty: 'No photos found'});
        
        service.getSearch(value, page)
            .then(search => this.setState(
                {
                    search: search.results,
                    loading: true,
                    empty: ''
                }
            ));
    };

    render(){
        const {value, search, empty} = this.state;
        return (
            <>
                <div className={"search"}>
                    <form onSubmit={(e) => this.funcSubmit(e)}  action="get">
                        <input
                            onChange={(e) => this.inputChange(e)}
                            className={"search__input"}
                            placeholder={"Enter photo name..."}
                            value={value}
                            type="search"
                            name={"search"}                            
                            />
                        <button className={"search__button"} type="submit">search</button>
                    </form>
                </div>
                <div className=
                {
                    empty ? "search__empty" : "search__empty no-active"
                }>
                 {empty}
                </div>   
        {
          search.length > 0 ? <GalleryList list={search} /> : ''     
        }  
        {
            console.log(value)
        }  
                   
         </>
        );
    }
}
