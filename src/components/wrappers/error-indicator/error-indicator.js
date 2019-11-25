import React, {Component} from 'react'

export default class ErrorIndicator extends Component{

    state = {
        hasError: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render(){
        const { hasError } = this.state;

        if(hasError) return <div className={"error"}>Something went wrong.... :(</div>;

        return this.props.children
    }
}