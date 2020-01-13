import React from 'react'
import {ErrorIndicator} from './ErrorIndicator';

export default class ErrorBoundry extends React.Component{

    state={
        errorStatus: false,
    }
    
    componentDidCatch(){
        this.setState({
            errorStatus: true
        })
    }

    render(){

        if(this.state.errorStatus){
            return <ErrorIndicator />
        }

        return this.props.children
    }
}